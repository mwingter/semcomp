import React from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./high-contrast.css";
import "./larger-text.css";
import "./style.css";

const contrastStrgKey = 'isAtHighContrast'
const resizeStrgKey = 'isTextResized'
const cssContrastClass = 'contrast'
const cssResizeClass = 'larger-text'

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
  
  return (
    <Nav className="a11ybar-content justify-content-end">
      <NavItem class="nav-item">
        <NavLink  class="nav-link" href="#conteudo" accesskey="1">Conteúdo principal [1]</NavLink>
      </NavItem>
      <NavItem class="nav-item">
        <NavLink  class="nav-link" href="#header" accesskey="2">Início do menu [2]</NavLink>
      </NavItem>
      <NavItem class="nav-item">
        <NavLink  class="nav-link" href="#footer" accesskey="3">Ir para o rodapé [3]</NavLink>
      </NavItem>
      <NavItem class="nav-item">
        <NavLink 
          class="nav-link" 
          href="" 
          id="high-contrast" 
          accesskey="4" 
          onClick={() => { window.toggleContrast() }}
        >Alto contraste [4]</NavLink>
      </NavItem>
      <NavItem class="nav-item">
        <NavLink 
          class="nav-link" 
          href="" 
          id="fontsize" 
          accesskey="5" 
          onClick={() => { window.toggleResize() }}
        >Aumentar/diminuir texto [5]</NavLink>
      </NavItem>
      <NavItem class="nav-item">
        <NavLink 
          class="nav-link" 
          href="" 
          id="back" 
          accesskey="6" 
          onClick={() => { window.history.back() }}
        >Voltar para a página anterior [6]</NavLink>
      </NavItem>
    </Nav>
  );
};

export default A11yHeader;
