import React from "react";
import { GoMarkGithub } from "react-icons/go";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <h1>
        <a href="/">Note App</a>
      </h1>
      <a
        href="https://github.com/pingAvisek/answer_task3"
        target="_blank"
        rel="noreferrer"
      >
        <GoMarkGithub />
      </a>
    </nav>
  );
};

export default NavBar;
