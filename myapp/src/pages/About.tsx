import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/kishan.jpeg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {MdWork} from 'react-icons/md'

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hi I am Bhargava Teja</h1>
      <h2 className="profile-text">MERN Stack Developer</h2>
      <h4 className="profile-text">
        This project is created using React, Redux-Toolkit, TypeScript & SASS
      </h4>
      <div className="profile-links">
        <a href="https://github.com/BhargavaTejaN?tab=repositories" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/bhargava-teja-narasani-753615217/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://unrivaled-crumble-c11369.netlify.app/" target="_blank" rel="noopener noreferrer">
          <MdWork />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);