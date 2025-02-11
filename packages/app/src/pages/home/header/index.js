import React from "react";

import { Link } from "react-router-dom";

import NavBar from "../../../components/navbar";
import { Routes } from "../../../router";

import { useSelector } from "react-redux";

import BackgroundImage from "../../../assets/home-background.png";

import "./style.css";

const HomeHeader = (props) => {
  const isUserLoggedIn = Boolean(useSelector((state) => state.auth.token));

  return (
    <header className="home-header" id="header" role="banner">
      {/* <img alt='' src={BackgroundImage} /> */}
      <div className="backdrop" />
      <div className="navbar-container">
        <NavBar user={props.user} />
      </div>
      <div className="text-container">
        <h1 className="pt-lang">
          A maior semana acadêmica de computação do Brasil!
          <br />
          De 25 de setembro a 01 de outubro
        </h1>
        <h1 className="en-lang">
          The biggest academic week of computer science in Brazil!
          <br />
          From September 25th to October 1st
        </h1>
        {!isUserLoggedIn && (
          <Link className="home-signup-button" to={Routes.signup}>
            <span className="pt-lang">Inscreva-se</span>
            <span className="en-lang">Sign up</span>
          </Link>
        )}
        {/* <button className="home-signup-button home-signup-button-disabled">
					Inscrições em breve!
				</button> */}
      </div>
    </header>
  );
};

export default HomeHeader;
