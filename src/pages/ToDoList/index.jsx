import React from "react";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function ToDoList() {
  const [user] = useAuthState(auth);
  console.log(user.providerData[0].uid);

  // taskname, color

  return (
    <ToDoListMain>
      <TopToDoList>
        <p>Happy to add your task</p>
        <Button color="primary" aria-label="Add a task" variant="contained">
          <AddIcon />
        </Button>
      </TopToDoList>
      <BodyToDoList></BodyToDoList>
    </ToDoListMain>
  );
}

export default ToDoList;

const ToDoListMain = styled.div`
  padding: 1rem;
`;

const TopToDoList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BodyToDoList = styled.div``;
