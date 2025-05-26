import React from "react";
import { useState } from "react";
import "./styles/Settings.css"

function Settings({ setSpentsLimit }) {
  const [isOpen, setIsOpen] = useState(false);
  const [limitAmount, setLimitAmount] = useState(0);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  }

  const handleLimitAmount = (e) => {
    setLimitAmount(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (limitAmount >= 0) {
      setSpentsLimit(limitAmount);
      localStorage.setItem('limitAmount', limitAmount);
      setIsOpen(false)
    } else {
      alert("El monto no puede ser negativo")
    }
  }

  return (
    <div className="settings">
      <h2>Ajustes</h2>
      <ul className="settings-list">
        <li className="setting-item">
          <button id="change-limit" onClick={togglePopUp}>Cambiar monto limite</button>
        </li>
      </ul>
      <div className={`modal-change-limit ${isOpen ? 'visible' : 'hidden'}`}>
        <button className="modal__close" onClick={togglePopUp}>X</button>
        <h2 className="modal-title">Ingrese el nuevo monto limite</h2>
        <form onSubmit={handleSubmit} className="modal__form">
          <input type="number" onChange={handleLimitAmount} className="form__input"/>
          <button type="submit" className="send-button">Guardar</button>
        </form>
      </div>
    </div>
  )
}

export default Settings