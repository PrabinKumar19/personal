import { Checkbox } from "@mui/material";
import React from "react";
import styled from "styled-components";

function EachTask({ color, task }) {
  return (
    <TaskBody>
      <div>
        <div
          style={{
            backgroundColor: `${color}`,
          }}
        ></div>
        <p>{task}</p>
      </div>
      <Checkbox />
    </TaskBody>
  );
}

export default EachTask;

const TaskBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  gap: 20px;

  > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  > div > div {
    width: 5px;
    height: 20px;
    background-color: red;
  }

  > div > p {
    color: #6b6b6b;
    font-weight: 500;
  }
`;
