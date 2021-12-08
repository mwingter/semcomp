import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/auth";

import Navlink from "./nav-link"; // a link reference 'a' with the appearance of a button
import { Routes } from "../../router";
import SemcompLogo from "../../assets/logo-24.png";
import { HashLink } from "react-router-hash-link";

import "./style.css";

const Navbar = () => {
  const isUserLoggedIn = Boolean(useSelector((state) => state.auth.token));
  const dispatch = useDispatch();

  const tShirtsFormLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSdBUY4gf8-CKhoXEmZ_bIvovprtGi7KOwNuo2WFcfsejl6a5w/viewform";

  function logUserOut() {
    dispatch(logout());
  }

  return (
    <nav className="navbar-content" aria-label="menu">
      <HashLink to={Routes.home + "#header"} role="logo">
        <img alt="Logo da Semcomp" src={SemcompLogo} />
      </HashLink>
      <div className="links-container">
        <Navlink
          style={{ color: "yellow" }}
          onClick={() =>
            window.open(tShirtsFormLink, "_blank", "noopener noreferrer")
          }
        >
          <span className="pt-lang">Comprar camiseta</span>
          <span className="en-lang">Buy T-shirt</span>
        </Navlink>
        <Navlink href={Routes.home + "#about"}>
          <span className="pt-lang">Sobre nós</span>
          <span className="en-lang">About us</span>
        </Navlink>
        {/* <Navlink
					href={Routes.sponsors}
				>Patrocinadores</Navlink> */}
        {/* <Navlink
					href={Routes.home + '#schedule'}
				>Cronograma</Navlink> */}
        {isUserLoggedIn ? (
          <>
            {/* <Navlink
              href={Routes.riddle}
            >Riddle</Navlink> */}
            {/* <Navlink
              href={Routes.riddlethon}
            >Riddlethon</Navlink>
            <Navlink
              href={Routes.hardToClick}
            >Duro de Clicar</Navlink> */}
            <Navlink href={Routes.profile}>
              <span className="pt-lang">Perfil</span>
              <span className="en-lang">Profile</span>
            </Navlink>
            <Navlink onClick={logUserOut} href={Routes.home}>
              <span className="pt-lang">Sair</span>
              <span className="en-lang">Sign out</span>
            </Navlink>
          </>
        ) : (
          <>
            <Navlink href={Routes.signup}>
              <span className="pt-lang">Cadastrar</span>
              <span className="en-lang">Sign up</span>
            </Navlink>
            <Navlink href={Routes.login}>
              <span className="pt-lang">Entrar</span>
              <span className="en-lang">Login</span>
            </Navlink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
