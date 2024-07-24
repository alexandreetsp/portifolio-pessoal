"use client";

import React from "react";
import NavMenu from "../organisms/navMenuSide";
import {File, Home, MailIcon, User} from "lucide-react";
import HomePage from "./Home";
import About from "./About";
import Projects from "./Projects";
import GetinTouch from "./GetinTouch";

const data = [
  {key: "homeKey", content: <HomePage></HomePage>},
  {key: "PersonIconKey", content: <About></About>},
  {key: "FileKey", content: <Projects></Projects>},
  {key: "MailIconKey", content: <GetinTouch></GetinTouch>},
];

const dataIcon = [
  {key: "homeKey", icon: <Home />},
  {key: "PersonIconKey", icon: <User />},
  {key: "FileKey", icon: <File />},
  {key: "MailIconKey", icon: <MailIcon />},
];

function Header() {
  return (
    <div>
      <div>
        <NavMenu DataContent={data} IconArray={dataIcon}></NavMenu>
      </div>
    </div>
  );
}

export default Header;
