import React from "react";
import styled from "styled-components";
import ConnectGroups from "./ConnectGroups";

const HomeDiv = styled.div`
  padding-top: 65px;
  margin: auto;
  text-align: center;
`;

const GroupsPage = () => {
  return (
    <React.Fragment>
      <HomeDiv>
        <span>
          Get connected to a group of like-minded peers! Our connect groups meet
          once a week, and each group has a certain focus.
        </span>
        <ConnectGroups />
      </HomeDiv>
    </React.Fragment>
  );
};
export default GroupsPage;
