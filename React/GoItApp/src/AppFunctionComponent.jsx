import { Component, useState } from "react";
import {
  Card,
  CitiesList,
  City,
  Department,
  DepartmentList,
  MainContent,
  Menu,
  Paper,
  Sidebar,
  Tutorlist,
} from "./components";

import CONTENT from "./contants/Content";
import sidebarMenu from "./contants/Sidebar";

import CustomToogleButton from "./components/shared/CustomToogleButton";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import paperIMG from "./assets/img/paperIMG.svg";

export default function AppFunctionComponent() {
  const [content, setContent] = useState({ ...CONTENT });
  const [showSidebar, setShowSidebar] = useState(true);

  function handleToogle() {
    setShowSidebar(!showSidebar);
  }

  function setNewFatherState(newState) {
    setContent(newState);
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        sidebarMenu={sidebarMenu}
        handleToogle={handleToogle}
        showSidebar={showSidebar}
      />
      <MainContent>
        <Menu>
          <div>
            {!showSidebar && (
              <CustomToogleButton onClick={handleToogle} position="static">
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </CustomToogleButton>
            )}
            <span>Informacion de la Universidad</span>
          </div>
        </Menu>
        <Paper content={content}>
          <img src={paperIMG} alt="" width={"80%"} />
          <p>Universidad</p>
          <p>{content.name}</p>
        </Paper>
        <Card content={content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          corporis vel voluptas modi est alias reprehenderit, vero placeat
          distinctio ipsum, adipisci aut ea odio blanditiis velit assumenda odit
          rerum consequatur.
        </Card>
        <Tutorlist content={content} setFatherState={setNewFatherState} />
        <CitiesList content={content} setFatherState={setNewFatherState} />
        <City content={content} />
        <DepartmentList content={content} />
        <Department content={content} />
      </MainContent>
    </div>
  );
}
