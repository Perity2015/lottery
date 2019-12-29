import React, { Fragment } from "react";
import { $Employee } from "../entry/$employee";
import { $Prize } from "../entry/$prize";
import { CompanyPrizes } from "../helper/const";
import { getLocalStorageData } from "../App";
import styled from "styled-components"
import winnersRecords from "../assets/winners-records.png"

export const RecordsModal = (props: any) => {
	const keys = Object.keys(CompanyPrizes);
	const allRecords = keys.map((key) => {
		// @ts-ignore
		const prize: $Prize = CompanyPrizes[key];
		const levelRecords: $Employee[] = getLocalStorageData(key);
		return {
			title: prize.title,
			records: levelRecords,
		}
	})
	return (
		<Modal>
			<RecordsWrapper>
				<div>
					{
						allRecords.map((item) =>
							<Fragment key={item.title}>
								<Title>{item.title}</Title>
								<ItemWrapper>
									{
										item.records.map((record) => <div key={record.index}>{record.name}</div>)
									}
								</ItemWrapper>
							</Fragment>)
					}
				</div>
			</RecordsWrapper>
			<div className="close" onClick={props.onClose}/>
		</Modal>
	);
};

const Modal = styled.div`// styled
  & {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
		background:linear-gradient(180deg,rgba(28,31,61,1) 0%,rgba(29,31,41,0.8) 100%);
		font-family: PingFangSC-Semibold;
  }
`;

const RecordsWrapper = styled.div`// styled
  & {
    width: 16.41rem;
    height: 7.95rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${winnersRecords});
    >div{
			text-align: center;
			width: 9rem;
			height: 4.5rem;
			overflow: auto;
			margin-top: 2.8rem;
			margin-left: auto;
			margin-right: auto;
			font-size: .42rem;
			font-weight: 400;
			color: #acf4ff;
			line-height: .59rem
    }
  }
`;

const Title = styled.div`// styled
  & {
    text-align: center;
    position: relative;
    margin: .3rem auto;
    &::after{
    	content: " ";
			position: absolute;
			left: 50%;
			top: 50%;
			-webkit-transform: translate(-50%, -50%);
			-ms-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
			width: 7.76rem;
			height: .14rem;
			background-image: url(data:image/png;base64,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);
			background-size: cover
    }
  }
`;

const ItemWrapper = styled.div`// styled
  & {
    display: block;
    text-align: left;
    line-height: 1.5;
    min-height: .6rem;
    font-family: PingFangSC-Medium;
    >div{
    	display: inline-block;
    	width: 33%;
    	text-align: center;
    }
  }
`;