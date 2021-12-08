import React from "react";
import { Nav, NavItem, NavLink, DropdownItem, DropdownToggle, DropdownMenu, UncontrolledDropdown } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./high-contrast.css";
import "./larger-text.css";
import "./style.css";

const contrastStrgKey = 'isAtHighContrast'
const resizeStrgKey = 'isTextResized'
const langStrgKey = 'isLanguageEN'
const cssContrastClass = 'contrast'
const cssResizeClass = 'larger-text'
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
    <Nav className="a11ybar-content justify-content-start">
      <NavItem class="nav-item">
        <NavLink  class="nav-link" href="#conteudo" accesskey="1">
          <span className="pt-lang">Conteúdo Principal [1]</span>
          <span className="en-lang">Main Content [1]</span>
        </NavLink>
      </NavItem>
      <NavItem class="nav-item">
        <NavLink  class="nav-link" href="#header" accesskey="2">
          <span className="pt-lang">Início do Menu [2]</span>
          <span className="en-lang">Menu Start [2]</span>
        </NavLink>
      </NavItem>
      <NavItem class="nav-item">
        <NavLink  class="nav-link" href="#footer" accesskey="3">
          <span className="pt-lang">Ir para o rodapé [3]</span>
          <span className="en-lang">Go to footer [3]</span>
        </NavLink>
      </NavItem>
      <NavItem class="nav-item">
        <NavLink 
          class="nav-link" 
          href="#back" 
          id="back" 
          accesskey="4" 
          onClick={() => { window.history.back(); }}
        >
          <span className="pt-lang">Voltar para a página anterior [4]</span>
          <span className="en-lang">Return to previous page [4]</span>
        </NavLink>
      </NavItem>

      <UncontrolledDropdown>
        <DropdownToggle caret>
          Acessibilidade
        </DropdownToggle>
        <DropdownMenu>      
          <DropdownItem>
            <NavLink
              class="nav-link" 
              href="#high-contrast" 
              id="high-contrast" 
              accesskey="5" 
              onClick={() => { window.toggleContrast() }}
              onKeyDown={() => { window.toggleContrast() }}
            >
              <span className="pt-lang">Alto contraste [5]</span>
              <span className="en-lang">High contrast [5]</span>
            </NavLink>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <NavLink 
              class="nav-link" 
              href="#fontsize" 
              id="fontsize" 
              accesskey="6" 
              onClick={() => { window.toggleResize() }}
              onKeyDown={() => { window.toggleResize() }}
            >
              <span className="pt-lang">Aumentar/diminuir texto [6]</span>
              <span className="en-lang">Increase/reduce text size [6]</span>
            </NavLink>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <NavLink 
              class="nav-link" 
              href="#lang" 
              id="lang" 
              accesskey="7" 
              onClick={() => { window.toggleLang() }}
              onKeyDown={() => { window.toggleLang() }}
            >
              <span className="pt-lang">Trocar língua (Português/Inglês) [7]</span>
              <span className="en-lang">Switch language (Portuguese/English) [7]</span>
          </NavLink>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>  
  );
};

export default A11yHeader;