import { cloneDeep, get, isEmpty } from "lodash"
import React, { Fragment } from 'react';
import { $Employee } from "./entry/$employee"
import { $Prize } from "./entry/$prize"
import styled from "styled-components"
import XLSX from 'xlsx';
import { Lottery } from './components/lottery';
import { LotteryRecords } from "./components/lottery-records"
import { RecordsModal } from './components/records-modal';
import { CompanyPrizes, Employees, LotteryStatus, PrizeLevel, StorageKeys, TimeInterval } from "./helper/const";

export const getLocalStorageData = (path: string) => {
	try {
		return JSON.parse(localStorage.getItem(path) || "[]")
	} catch (e) {
		return [];
	}
}

const randomSort = (a: any, b: any) => {
	return Math.random() > .5 ? -1 : 1;
}

class App extends React.Component<any, any> {
	private rollTimer: any;
	private lotteryTimer: any;
	private isRoll: boolean = true;

	constructor(props: any) {
		super(props);
		const prizeEmployees = getLocalStorageData(StorageKeys.EMPLOYEES)
		this.state = {
			prizeEmployees: isEmpty(prizeEmployees) ? cloneDeep(Employees) : prizeEmployees,
			visible: false,
			showSettings: false,
			lotteryVo: {
				level: PrizeLevel.THIRD,
				status: LotteryStatus.NORMAL,
				employee: undefined,
				index: 0,
				records: [],
			},
			prize: get(CompanyPrizes, PrizeLevel.THIRD)
		}
	}

	public componentWillMount(): void {
		if (this.rollTimer) {
			clearTimeout(this.rollTimer);
		}
		if (this.lotteryTimer) {
			clearInterval(this.lotteryTimer);
		}
	}

	public onLottery = () => {
		this.setState({ showSettings: false })
		const { lotteryVo, prize } = this.state;
		if (lotteryVo.status === LotteryStatus.NORMAL) {
			const level = lotteryVo.level;
			const levelRecords = getLocalStorageData(level);
			if (prize.total <= levelRecords.length) {
				return;
			}
			const newLotteryVo = { ...lotteryVo, records: [], status: LotteryStatus.ROLL }
			this.setState({ lotteryVo: newLotteryVo }, this.startRoll)
		} else if (lotteryVo.status === LotteryStatus.ROLL) {
			const newLotteryVo = { ...lotteryVo, status: LotteryStatus.STOP }
			this.setState({ lotteryVo: newLotteryVo })
			if (this.lotteryTimer) {
				clearInterval(this.lotteryTimer)
			}
			this.lotteryTimer = setInterval(this.stopRoll, TimeInterval.lottery)
		}
	}

	public startRoll = () => {
		const { prizeEmployees, lotteryVo } = this.state;
		if (this.rollTimer) {
			clearTimeout(this.rollTimer)
		}
		if (this.isRoll) {
			console.log(prizeEmployees.length)
			const index = Math.floor(Math.random() * (prizeEmployees.length - 1));
			const employee = prizeEmployees[index];
			const newLotteryVo = { ...lotteryVo, index, employee }
			this.setState({ lotteryVo: newLotteryVo })
		}
		this.rollTimer = setTimeout(this.startRoll, TimeInterval.roll);
	}

	public stopRoll = () => {
		const { lotteryVo, prize, prizeEmployees } = this.state;
		if (this.isRoll && lotteryVo.employee) {
			this.isRoll = false;
			prizeEmployees.splice(lotteryVo.index, 1);
			const newLotteryVo = { ...lotteryVo, records: [...lotteryVo.records, lotteryVo.employee] }
			if (lotteryVo.records.length >= prize.per - 1) {
				clearTimeout(this.rollTimer);
				clearInterval(this.lotteryTimer);
				this.setState({
					lotteryVo: { ...newLotteryVo, status: LotteryStatus.NORMAL },
					prizeEmployees
				}, this.saveToLocal);
			} else {
				this.setState({ lotteryVo: newLotteryVo, prizeEmployees })
			}
		} else {
			this.isRoll = true;
		}
	}

	public saveToLocal = () => {
		this.isRoll = true;
		const { prizeEmployees, lotteryVo } = this.state;
		prizeEmployees.sort(randomSort);
		localStorage.setItem(StorageKeys.EMPLOYEES, JSON.stringify(prizeEmployees));
		const level = lotteryVo.level;
		const levelRecords = getLocalStorageData(level);
		localStorage.setItem(level, JSON.stringify([...levelRecords, ...lotteryVo.records]));
	}

	public setVisible = (visible = true) => {
		const { lotteryVo } = this.state;
		if (lotteryVo.status !== LotteryStatus.NORMAL) {
			return;
		}
		this.setState({ visible });
	}

	public toggleSettings = () => {
		this.setState({ showSettings: !this.state.showSettings })
	};

	public onChange = (e: any) => {
		const files = e.target.files;
		if (files && files[0]) {
			this.handleFile(files[0])
		}
	};

	public handleFile = (file: any) => {
		const reader = new FileReader();
		const rABS = !!reader.readAsBinaryString;
		reader.onload = (e: any) => {
			const bstr = e.target.result;
			const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array' });
			const wsname = wb.SheetNames[0];
			const ws = wb.Sheets[wsname];
			const data = XLSX.utils.sheet_to_json(ws, { header: 2 });
			data.sort(randomSort)
			localStorage.setItem(StorageKeys.EMPLOYEES, JSON.stringify(data));
			this.setState({ prizeEmployees: data, showSettings: false }, this.init);
		};
		if (rABS) {
			reader.readAsBinaryString(file);
		} else {
			reader.readAsArrayBuffer(file);
		}
	};

	public init = () => {
		localStorage.setItem(StorageKeys.THIRD, JSON.stringify([]));
		localStorage.setItem(StorageKeys.SECOND, JSON.stringify([]));
		localStorage.setItem(StorageKeys.FIRST, JSON.stringify([]));
		this.setState({
			showSettings: false,
			lotteryVo: {
				level: PrizeLevel.THIRD,
				status: LotteryStatus.NORMAL,
				employee: undefined,
				index: 0,
				records: [],
			},
			prize: get(CompanyPrizes, PrizeLevel.THIRD)
		})
	};

	public setPrize = (level: PrizeLevel) => {
		const { lotteryVo } = this.state;
		if (lotteryVo.status !== LotteryStatus.NORMAL) {
			return;
		}
		if (this.checkPrize(level)) {
			this.setState({
				lotteryVo: {
					level,
					status: LotteryStatus.NORMAL,
					employee: undefined,
					index: 0,
					records: [],
				},
				showSettings: false,
				prize: get(CompanyPrizes, level)
			});
		}
	};

	public checkPrize = (level: PrizeLevel) => {
		const prize = CompanyPrizes[level];
		const list = JSON.parse(localStorage.getItem(prize.key) || '[]');
		return list.length < prize.total;
	};

	public renderSettings = () => {
		const { lotteryVo } = this.state;
		const keys = Object.keys(CompanyPrizes);
		const allRecords: any[] = keys.map((key) => {
			// @ts-ignore
			const prize: $Prize = CompanyPrizes[key];
			const levelRecords: $Employee[] = getLocalStorageData(key);
			return {
				title: prize.title,
				records: levelRecords,
				prize,
				level: key,
			}
		})
		return (
			<div>
				{
					allRecords.map((record) => (
						<PrizeItem onClick={this.setPrize.bind(this, record.level)}
											 theme={{ checked: record.level === lotteryVo.level }}>
							{record.title}（{record.records.length}/{record.prize.total}）
						</PrizeItem>
					))
				}
			</div>
		)
	}

	public render() {
		const { lotteryVo, prize, visible, showSettings } = this.state;
		return (
			<Fragment>
				<Lottery employee={lotteryVo.employee} onLottery={this.onLottery} status={lotteryVo.status} prize={prize}/>
				<LotteryRecords setVisible={this.setVisible} records={lotteryVo.records} prize={prize}/>
				{visible && <RecordsModal onClose={this.setVisible.bind(this, false)}/>}
				<SettingsWrapper>
					<div onClick={this.toggleSettings}>设置</div>
					{showSettings && <input type="file" accept={".xlsx"} onChange={this.onChange} value={undefined}/>}
					{showSettings && this.renderSettings()}
				</SettingsWrapper>
			</Fragment>
		);
	}
}

export default App;

const SettingsWrapper = styled.div`// styled
  & {
    position: fixed;
    z-index: 0;
    display: flex;
    align-items: center;
    left: 16px;
    top: 16px;
    font-size: 14px;
    font-family: PingFangSC-Semibold;
    >div:nth-child(1){
    	cursor: pointer;
    	margin-right: 16px;
    }
    input{
    	color: transparent;
    }
    span{
    	cursor: pointer;
    	margin-right: 12px;
    }
  }
`;

const PrizeItem = styled.span`// styled
  & {
    color: ${props => props.theme.checked ? "#ACF4FF" : "white"};
  }
`;
