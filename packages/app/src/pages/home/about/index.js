import React from "react";

import { Link } from "react-router-dom";

import { Routes } from "../../../router";
import BannerSemcomp from "../../../assets/banner.png";

import { useSelector } from "react-redux";

import "./style.css";

const About = () => {
  const isUserLoggedIn = Boolean(useSelector((state) => state.auth.token));

  return (
    <>
      <div className="big-shiny-divider"></div>
      {/* Note: IDs should not be used in most React components. This is one of the
		    few exceptions to allow for hash linking. */}
      <div className="home-about-background">
        <div className="home-about-container" id="about">
          <div className="text-container">
            <h2 className="pt-lang">Sobre a Semcomp</h2>
            <h2 className="en-lang">About Semcomp</h2>
            <p>
              <span className="pt-lang">A Semcomp é a Semana Acadêmica de Computação dos cursos de
              Ciências de Computação e Sistemas de Informação do ICMC da USP. </span>
              <span className="en-lang">Semcomp is the Computer Science Academic Week of the 
              Computer Science and Information Systems majors of ICMC-USP. </span>

              <br />
              <br />
              <strong className="pt-lang">
                A sua 24ª edição vai acontecer do dia 25 de setembro até 01 de
                outubro
              </strong>
              <span className="pt-lang">, e será totalmente online, gratuita e por meio de plataformas
              como YouTube e Discord.</span>

              <strong className="en-lang" >
                Its 24th edition will take place from the 25th of September to the 1st of October
              </strong>
              <span className="en-lang">, and will be completely online, free and through platforms 
              such as YouTube and Discord.</span>

              <br />
              {!isUserLoggedIn && (
                <>
                  <br />
                  <br />
                  <span className="pt-lang">Não deixe de participar, basta criar sua conta!</span>
                  <span className="en-lang">Be sure to participate, just create your account!</span>
                  <br />
                  <br />
                </>
              )}
            </p>
            {!isUserLoggedIn && (
              (
                <Link className="about-signup-button" to={Routes.signup}>
                  <span className="pt-lang">Quero participar!</span>
                  <span className="en-lang">Sign me up!</span>
                </Link>
              )
            )}
            {/* <button className="about-signup-button about-signup-button-disabled">
					Inscrições em breve!
				</button> */}
          </div>
          <img alt="Banner da Semcomp roxo, estilizado como holograma e escrito 'Semcomp 24' em branco com repetições delineadas em preto no fundo" src={BannerSemcomp} />
        </div>
        <div className="shiny-divider"></div>
      </div>
    </>
  );
};

export default About;
