import React from "react";
import "./styles/BottomBar.css";
import { Link } from "react-router-dom";

function BottomBar(props) {
  const handleAddSpent = () => {
    props.setShowModal(true);
  }


  return (
    <>
      <div className="bottom-bar">
        <div className="bottom-bar__container">
          <Link to="/" className="bottom-bar__item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFVepV-lvaiOU42mE0WxunWf88v_6hBoItA&s" alt="img" className="item__img"/>
            <p className="bottom-bar__text">Inicio</p>
          </Link>
          <Link to="/charts" className="bottom-bar__item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFVepV-lvaiOU42mE0WxunWf88v_6hBoItA&s" alt="img" className="item__img"/>
            <p className="bottom-bar__text">Graficos</p>
          </Link>
          <button className="bottom-bar__item" id="add-spent" onClick={handleAddSpent}>+</button>
          <div className="add-spent-space"></div>
          <Link to="/history" className="bottom-bar__item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFVepV-lvaiOU42mE0WxunWf88v_6hBoItA&s" alt="img" className="item__img"/>
            <p className="bottom-bar__text">Historial</p>
          </Link>
          <Link className="bottom-bar__item" to="/settings">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFVepV-lvaiOU42mE0WxunWf88v_6hBoItA&s" alt="img" className="item__img"/>
            <p className="bottom-bar__text">Ajustes</p>
          </Link>
        </div>
      </div>
      <div className="bottom-block"></div>
    </>
  );
}

export default BottomBar;