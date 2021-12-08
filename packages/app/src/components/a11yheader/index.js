import React from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./high-contrast.css";
import "./larger-text.css";
import "./style.css";

const contrastStrgKey = 'isAtHighContrast'
const resizeStrgKey = 'isTextResized'
const langStrgKey = 'isLanguageEN'
const cssContrastClass = 'contrast'
const cssResizeClass = 'larger-text'
const cssLangClassPT = 'pt-lang'
const cssLangClassEN = 'en-lang'
const cssLangClassActive = 'active-lang'

const A11yHeader = () => {
  // NOTE: HC = High Contrast

  // Set high contrast functions in the page
  (function() {
    const Contrast = {
      isAtHC: false,
      toggle: function () {
        this.setContrast(!this.isAtHC);
      },
      setContrast: function (isAtHighContrast) {
        localStorage[contrastStrgKey] = '' + isAtHighContrast;
        this.isAtHC = isAtHighContrast;
        this.updateSiteBody();
      },
      updateSiteBody: function () {
        const body = document.body;
        if (!body) return;
        
        this.isAtHC = this.isAtHC || localStorage[contrastStrgKey] === 'true';
        
        if (this.isAtHC) {
          body.classList.add(cssContrastClass);
        }
        else {
          body.classList.remove(cssContrastClass);
        }
      }
    }

    window.toggleContrast = function () {
      Contrast.toggle(); 
    };

    Contrast.updateSiteBody();
  })();

  // Set text resizing functions in the page
  (function() {
    const TextResize = {
      isResized: false,
      toggle: function () {
        this.setResize(!this.isResized);
      },
      setResize: function (isResized) {
        localStorage[resizeStrgKey] = '' + isResized;
        this.isResized = isResized;
        this.updateSiteBody();
      },
      updateSiteBody: function () {
        const body = document.body;
        if (!body) return;
        
        this.isResized = this.isResized || localStorage[resizeStrgKey] === 'true';
        
        if (this.isResized) {
          body.classList.add(cssResizeClass);
        }
        else {
          body.classList.remove(cssResizeClass);
        }
      }
    }

    window.toggleResize = function () {
      TextResize.toggle(); 
    };

    TextResize.updateSiteBody();
  })();
  
  // Set language (PT-BR or EN)
  (function() {
    const SwitchLanguage = {
      isEN: false,
      toggle: function () {
        this.setLang(!this.isEN);
      },
      setLang: function (isEN) {
        localStorage[langStrgKey] = '' + isEN;
        this.isEN = isEN;
        this.updateSiteBody();
      },
      updateSiteBody: function () {
        const body = document.body;
        if (!body) return;
        
        this.isEN = this.isEN || localStorage[langStrgKey] === 'true';
        
        if (this.isEN) {
          body.classList.add(cssLangClassActive);
        }
        else {
          body.classList.remove(cssLangClassActive);
        }

      }
    }

    window.toggleLang = function () {
      SwitchLanguage.toggle(); 
    };

    SwitchLanguage.updateSiteBody();

  })();

  return (
    <Nav className="a11ybar-content justify-content-end">
      <NavItem class="nav-item">
        <NavLink  class="nav-link" href="#conteudo" accesskey="1">Conteúdo Principal [1]</NavLink>
      </NavItem>
      <NavItem class="nav-item">
        <NavLink  class="nav-link" href="#header" accesskey="2">Início do Menu [2]</NavLink>
      </NavItem>
      <NavItem class="nav-item">
        <NavLink  class="nav-link" href="#footer" accesskey="3">Ir para o rodpé [3]</NavLink>
      </NavItem>
      <NavItem class="nav-item">
        <NavLink 
          class="nav-link" 
          href="#high-contrast" 
          id="high-contrast" 
          accesskey="4" 
          onClick={() => { window.toggleContrast() }}
          onKeyDown={() => { window.toggleContrast() }}
        >Alto contraste [4]</NavLink>
      </NavItem>
      <NavItem class="nav-item">
        <NavLink 
          class="nav-link" 
          href="#fontsize" 
          id="fontsize" 
          accesskey="5" 
          onClick={() => { window.toggleResize() }}
          onKeyDown={() => { window.toggleResize() }}
        >Aumentar/diminuir texto [5]</NavLink>
      </NavItem>
      <NavItem class="nav-item">
        <NavLink 
          class="nav-link" 
          href="#back" 
          id="back" 
          accesskey="6" 
          onClick={() => { window.history.back(); }}
        >Voltar para a página anterior [6]</NavLink>
      </NavItem>
      <NavItem class="nav-item">
        <NavLink 
          class="nav-link" 
          href="#lang" 
          id="lang" 
          accesskey="7" 
          onClick={() => { window.toggleLang() }}
          onKeyDown={() => { window.toggleLang() }}
        >Trocar língua (Português/Inglês) [7]</NavLink>
      </NavItem>
    </Nav>
  );
};

export default A11yHeader;
