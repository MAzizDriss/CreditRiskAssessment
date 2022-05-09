import React from "react";
import styled from "styled-components";
import { IoStatsChart } from "react-icons/io5";
import { themeColor, hoverEffect } from "../utils";

function Earnings() {
  return (
    <EarningsCard>
      <CardContent>
        <Chart>
          <IoStatsChart />
        </Chart>
        <EarningsText>Earnings</EarningsText>
        <Earning>$7,890</Earning>
        <EarningsIncrease>+ 10% since last month</EarningsIncrease>
      </CardContent>
    </EarningsCard>
  );
}

const EarningsCard = styled.div`
  height: 100%;
  width: 14rem;
  background-color: ${themeColor};
  padding: 0.8rem;
  border-radius: 1rem;
  color: white;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
`;

const CardContent = styled.div`
  margin: 1rem;
`;

const Chart = styled.div`
  display: flex;
  justify-content: center;
  svg {
    height: 4rem;
    width: 4rem;
  }
`;

const EarningsText = styled.h3`
  text-align: center;
  font-weight: normal;
  padding: 0.4rem 0;
`;

const Earning = styled.h2`
  text-align: center;
`;

const EarningsIncrease = styled.h5`
  text-align: center;
  font-weight: normal;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 2rem;
`;

export default Earnings;