import React from "react";
import { $Prize } from "../entry/$prize"
import { $Employee } from "../entry/$employee"
import styled from "styled-components"
import winners from "../assets/winners.png";

export interface ILotteryRecordsProps {
	setVisible: any;
	records: $Employee[];
	prize: $Prize;
}

export const LotteryRecords = (props: ILotteryRecordsProps) => {
	const { setVisible, records, prize } = props;
	return (
		<Wrapper>
			<RecordsWrapper>
				{
					records.map((record) => <div key={record.no} style={prize.style}>
						{record.name}
					</div>)
				}
			</RecordsWrapper>
			<TextWrapper onClick={setVisible}>中奖记录</TextWrapper>
		</Wrapper>
	);
};

const RecordsWrapper = styled.div`// styled
  & {
    position: absolute;
    display: block;
    left: 0;
    right: 0;
    padding: 0 .8rem;
    top: 3.28rem;
    font-size: .38rem;
    font-weight: 500;
    color: #acf4ff;
    line-height: .53rem;
    font-family: PingFangSC-Medium;
    >div{
    	width: 33%;
    	display: inline-block;
    	text-align: center;
    	margin-bottom: .48rem
    }
  }
`;

const Wrapper = styled.div`// styled
  & {
  	position: relative;
    width: 8.97rem;
    margin-left: .96rem;
    height: 8.2rem;
    background-image: url(${winners});
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

const TextWrapper = styled.div`// styled
  & {
    position: absolute;
    cursor: pointer;
    bottom: .18rem;
    transform: translateX(-50%);
    height: .44rem;
    line-height: .44rem;
    left: 50%;
    font-size:0.31rem;
		font-family:PingFangSC-Semibold;
		font-weight:600;
  }
`;

