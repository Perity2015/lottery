import React from "react";
import { $Prize } from "../entry/$prize";
import { $Employee } from "../entry/$employee"
import { LotteryStatus, StatusText } from "../helper/const"
import styled from "styled-components";
import luck from "../assets/luck.png";
import btn from "../assets/btn.png";
import loading from "../assets/loading.png";
import { get } from "lodash";

export interface ILotteryProps {
	employee: $Employee | undefined;
	status: LotteryStatus;
	onLottery: () => void;
	prize: $Prize;
}

export const Lottery = (props: ILotteryProps) => {
	const { employee, onLottery, status, prize } = props;
	return (
		<Wrapper>
			<UserWrapper>
				<div>{employee && employee.name}</div>
				<div>{employee && employee.no}</div>
			</UserWrapper>
			<PrizeWrapper>
				<div>{prize.title}</div>
				<div>({prize.name})</div>
			</PrizeWrapper>
			<BtnWrapper onClick={onLottery}>
				<div>
					{get(StatusText, status)}
					{status === LotteryStatus.STOP && <img src={loading} alt={""}/>}
				</div>
			</BtnWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.div`// styled
  & {
  	position: relative;
    width: 5.64rem;
    height: 8.2rem;
    background-image: url(${luck});
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

const UserWrapper = styled.div`// styled
  & {
  	position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    right: 1.51rem;
    top: 2.66rem;
    width: 2.07rem;
    height: 2.07rem;
    border-radius: 50%;
    line-height: .59rem;
    >div:nth-child(1){
			height:0.59rem;
			font-size:0.42rem;
			font-family:PingFangSC-Medium;
			font-weight:500;
			line-height:0.59rem;
    }
    >div:nth-child(2){
    	height:0.56rem;
			font-size:0.4rem;
			font-family:PingFangSC-Semibold;
			font-weight:400;
			line-height:0.56rem;
    }
  }
`;

const PrizeWrapper = styled.div`// styled
  & {
    position: absolute;
    text-align: center;
    bottom: 1.92rem;
    right: .18rem;
    left: .72rem;
    font-size: .48rem;
    font-weight: 500;
    line-height: .67rem;
    font-family:PingFangSC-Medium;
    >div:nth-child(2){
			height:0.46rem;
			font-size:0.33rem;
			font-family:PingFangSC-Semibold;
			font-weight:400;
			line-height:0.46rem;
    }
  }
`;

const BtnWrapper = styled.div`// styled
  & {
  	position: absolute;
  	cursor: pointer;
    bottom: .36rem;
    right: .4rem;
    width: 4.17rem;
    height: 1.53rem;
    text-align: center;
    font-size: .34rem;
    color: #fff;
    line-height: 1.32rem;
    background-size: cover;
    background-repeat: no-repeat;
    font-family: PingFangSC-Semibold;
    font-weight:600;
    background-image: url(${btn});
    >div{
    display: flex;
		align-items: center;
		justify-content: center;
    	>img{
    		width: .34rem;
    		height: .34rem;
    		margin-left: .12em;
    		animation: rotation 1s linear infinite;
    	}
    }
  }
`;
