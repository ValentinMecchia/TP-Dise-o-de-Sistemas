import React from "react";
import "../styles/BottomBar.css";

function BottomBar(props) {
  const handleAddSpent = () => {
    props.setShowModal(true);
  }


  return (
    <div className="bottom-bar">
      <div className="bottom-bar__container">
        <button className="bottom-bar__item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFVepV-lvaiOU42mE0WxunWf88v_6hBoItA&s" alt="img" className="item__img"/>
          <p className="bottom-bar__text">Inicio</p>
        </button>
        <button className="bottom-bar__item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFVepV-lvaiOU42mE0WxunWf88v_6hBoItA&s" alt="img" className="item__img"/>
          <p className="bottom-bar__text">Graficos</p>
        </button>
        <div className="add-spent-space"></div>
        <button className="bottom-bar__item" id="add-spent" onClick={handleAddSpent}>+</button>
        <button className="bottom-bar__item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFVepV-lvaiOU42mE0WxunWf88v_6hBoItA&s" alt="img" className="item__img"/>
          <p className="bottom-bar__text">Historial</p>
        </button>
        <button className="bottom-bar__item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFVepV-lvaiOU42mE0WxunWf88v_6hBoItA&s" alt="img" className="item__img"/>
          <p className="bottom-bar__text">Ajustes</p>
        </button>
      </div>
    </div>
  );
}

export default BottomBar;