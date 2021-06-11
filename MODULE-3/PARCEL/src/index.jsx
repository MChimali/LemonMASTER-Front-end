import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import {top, line1, line2} from './assets/assets';

ReactDOM.render(   
    <> 
    <header>
      <div className="header-logo">
        <img src={top[0]} />
        <div className="platform-title">Warner Live</div>
      </div>
      <div className="header-buttons">
        <div>Inicio</div>
        <div>Buscar</div>
      </div>
    </header>
    <main>
      <div className="section-title">
        Los <span id="top-text"></span> más populares hoy
      </div>
      <section className="top">
        <div  className="top-item"><img src={top[1]} /></div>
        <div className="top-item"><img src={top[2]} /></div>
        <div className="top-item"><img src={top[3]} /></div>
        <div className="top-item"><img src={top[4]} /></div>
        <div className="top-item"><img src={top[5]} /></div>
      </section>
      <div className="section-title">Comedias</div>
      <section className="first">
        <div className="item"><img src={line1[0]} /></div>
        <div className="item"><img src={line1[1]} /></div>
        <div className="item"><img src={line1[2]} /></div>
        <div className="item"><img src={line1[3]} /></div>
        <div className="item"><img src={line1[4]} /></div>
        <div className="item"><img src={line1[5]} /></div>
      </section>
      <div className="section-title">Dramas basados en libros</div>
      <section className="second">
        <div className="item"><img src={line2[0]} /></div>
        <div className="item"><img src={line2[1]} /></div>
        <div className="item"><img src={line2[2]} /></div>
        <div className="item"><img src={line2[3]} /></div>
        <div className="item"><img src={line2[4]} /></div>
        <div className="item"><img src={line2[5]} /></div>
      </section>
    </main></>,
    document.getElementById("root")
  );