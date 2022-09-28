import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { selectRouteName, setRoute } from "../../features/routerSlice";

function SidebarOption({ Icon, title, path }) {
  const routeName = useSelector(selectRouteName);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  return routeName === path ? (
    <SidebarOptionMainActive>
      {<Icon />}
      <p>{title}</p>
    </SidebarOptionMainActive>
  ) : (
    <SidebarOptionMain
      onClick={() => {
        dispatch(setRoute(path));
        navigateTo(path);
      }}
    >
      {<Icon />}
      <p>{title}</p>
    </SidebarOptionMain>
  );
}

export default SidebarOption;

const SidebarOptionMain = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 20px;
  font-weight: 600;

  :hover {
    color: black;
    background-color: whitesmoke;
  }
`;

const SidebarOptionMainActive = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
  transition: 0.3s;
  border-radius: 20px;
  font-weight: 600;
  color: black;
  background-color: whitesmoke;
`;
