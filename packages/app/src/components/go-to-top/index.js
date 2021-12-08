import React from "react";

import "./style.css";

const GoToTop = () => {
  return (
    <div className="go-to-top-container">
      <button id="go-to-top" onClick={() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      }}>Voltar ao topo <span>&#8593;</span></button>
    </div>
  );
};

export default GoToTop;
