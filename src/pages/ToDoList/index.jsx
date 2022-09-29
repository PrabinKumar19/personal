import React, { useState } from "react";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { useForm, Controller } from "react-hook-form";
import { Button, IconButton } from "@mui/material";
import EachTask from "../../components/EachTask";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function ToDoList() {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);
  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      task_name: "",
    },
  });

  const onSubmit = (values) => console.log(values);
  // console.log(user.providerData[0].uid);

  const handleClose = () => {
    setValue("task_name", "This is being tested");
    // setOpen(false);
  };

  return (
    <ToDoListMain>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Add Task</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please add your task from the following form.
            </DialogContentText>
            <Controller
              name={"task_name"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  onChange={onChange}
                  value={value}
                  label="Task Name"
                  fullWidth
                  autoFocus
                  margin="dense"
                  variant="standard"
                />
              )}
              rules={{ required: true }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Subscribe</Button>
          </DialogActions>
        </form>
      </Dialog>
      <TopToDoList>
        <p>Happy to add your task</p>
        <IconButton
          color="primary"
          aria-label="Add a task"
          variant="contained"
          onClick={() => setOpen(true)}
        >
          <AddCircleIcon fontSize="large" />
        </IconButton>
      </TopToDoList>
      <BodyToDoList>
        <div>
          <p>Title</p>
          <p>Completed</p>
        </div>
        <div>
          <EachTask
            color={"Red"}
            task={
              "Guys when you add music, Just see if you have a list, start_radio at the end which means it’s a playlist rather than a single song. Just be cautious on that one."
            }
          />
          <EachTask color={"Yellow"} task={"Need to complete this task"} />
          <EachTask color={"Green"} task={"Need to complete this task"} />
        </div>
      </BodyToDoList>
    </ToDoListMain>
  );
}

export default ToDoList;

const ToDoListMain = styled.div`
  margin: 1rem;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 10px;
`;

const TopToDoList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 10px 0;
  margin-bottom: 10px;

  > p {
    font-weight: 700;
  }
`;
const BodyToDoList = styled.div`
  padding: 10px 0;

  > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    color: gray;
    font-size: 14px;
    font-weight: 700;
  }
`;
