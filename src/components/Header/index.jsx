import React from "react";
import { useSelector } from "react-redux";
import RouteIcon from "@mui/icons-material/Route";
import styled from "styled-components";
import { selectRouteName } from "../../features/routerSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { Avatar } from "@mui/material";
import { auth } from "../../firebase";

function Header() {
  const [user] = useAuthState(auth);
  const routeName = useSelector(selectRouteName);
  const checkPathName = () =>
    [
      { path: "/", name: "Dashboard" },
      { path: "/calendar", name: "Calendar" },
      { path: "/expenses", name: "Expenses" },
      { path: "/todolist", name: "To do List" },
    ].filter((route) => route.path === routeName)[0]?.name;

  return (
    <HeaderMain>
      <HeaderLeft>
        <RouteIcon />
        <p>{checkPathName()}</p>
      </HeaderLeft>
      <HeaderRight>
        <HeaderAvatar
          src={user?.photoURL}
          alt={user?.displayName}
          onClick={() => auth.signOut()}
        />
      </HeaderRight>
    </HeaderMain>
  );
}

export default Header;

const HeaderMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  > p {
    font-weight: 700;
  }
`;

const HeaderRight = styled.div``;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
