import React from "react";
import styled from "styled-components";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SidebarOption from "../SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function Sidebar() {
  return (
    <MainSideBar>
      <SidebarTop>
        <SidebarLogo>
          <AcUnitIcon />
          <h1>Winter</h1>
        </SidebarLogo>
        <SideBarUser>
          <SmallDescrip>Logged in as</SmallDescrip>
          <div>
            <PermIdentityIcon />
            <p>Prabin Kumar Pradeep</p>
          </div>
        </SideBarUser>
        <SidebarOptionMenu>
          <SmallDescrip>Menu</SmallDescrip>
          <div>
            <SidebarOption Icon={HomeIcon} title={"Dashboard"} path={"/"} />
            <SidebarOption
              Icon={AttachMoneyIcon}
              title={"Expenses"}
              path={"/expenses"}
            />
            <SidebarOption
              Icon={HowToRegIcon}
              title={"To Do List"}
              path={"/todolist"}
            />
            <SidebarOption
              Icon={CalendarMonthIcon}
              title={"Calendar"}
              path={"/calendar"}
            />
          </div>
        </SidebarOptionMenu>
      </SidebarTop>
      <SidebarBottom>Bottom</SidebarBottom>
    </MainSideBar>
  );
}

export default Sidebar;

const MainSideBar = styled.div`
  flex: 0.2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #051e34;
  color: #fff;
  height: 100vh;
  position: sticky;
  top: 0;
`;

const SidebarTop = styled.div``;

const SidebarBottom = styled.div``;

const SidebarOptionMenu = styled.div`
  padding: 10px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 0;
  }
`;

const SmallDescrip = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
`;

const SideBarUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  box-shadow: 0 -1px 0 rgb(255, 255, 255, 0.1) inset;

  > div {
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 10px;
  }

  > div > p {
    font-size: 14px;
    font-weight: 600;
  }

  > div > .MuiSvgIcon-root {
    color: #008000;
  }
`;

const SidebarLogo = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  box-shadow: 0 -1px 0 rgb(255, 255, 255, 0.1) inset;

  > h1 {
    font-weight: 400;
  }

  > .MuiSvgIcon-root {
    color: rgb(0, 127, 255);
  }
`;
