import React from "react";
import styled from "styled-components";
import EachTask from "../../components/EachTask";

function Dashboard() {
  return (
    <MainDashboard>
      <LeftTab>
        <h1>Today To do</h1>
        <TodayToDo>
          <h2>Yesterday</h2>
          <EachTask color={"green"} task={"Need to do something"} />
          <h2>Collection</h2>
          <p>Collection</p>
        </TodayToDo>
      </LeftTab>
      <RightTab>
        <h1>Expenses Overview</h1>
      </RightTab>
    </MainDashboard>
  );
}

export default Dashboard;

const MainDashboard = styled.div`
  padding: 20px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const LeftTab = styled.div`
  padding: 1rem;
  flex: 0.5;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  > h1 {
    color: gray;
  }
`;
const RightTab = styled.div`
  padding: 1rem;
  border-radius: 10px;
  flex: 0.5;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  > h1 {
    color: gray;
  }
`;

const TodayToDo = styled.div``;
