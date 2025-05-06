import React from "react";
import "../styles/AddSpentModal.css";
import { useState, useEffect } from "react";

function AddSpentModal(props) {

    const [todaysDate, setTodaysDate] = useState("");
    const [time, setTime] = useState("");
    const [name, setNombre] = useState("");
    const [amount, setMonto] = useState("");
    const [category, setCategoria] = useState("");
    const [description, setDescripcion] = useState("");


    useEffect(() => {
        const hoy = new Date();
        const yyyy = hoy.getFullYear();
        const mm = String(hoy.getMonth() + 1).padStart(2, '0');
        const dd = String(hoy.getDate()).padStart(2, '0');
        setTodaysDate(`${yyyy}-${mm}-${dd}`);

        const hh = String(hoy.getHours()).padStart(2, '0');
        const min = String(hoy.getMinutes()).padStart(2, '0');
        setTime(`${hh}:${min}`);
    }, []);

    const handleClose = () => {
        props.setShowModal(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !amount || !category || !todaysDate || !time) {
            alert("Por favor, completá todos los campos.");
            return;
        }

        if (amount > props.moneyRemaining) {
            alert(`El monto no puede ser mayor al dinero restante: $${props.moneyRemaining}.`);
            return;
        }

        if(amount <= 0) {
            alert("El monto debe ser mayor a 0.");
            return;
        }

        // console.log({ name, amount, category, todaysDate, time, description });

        const newSpent = {
            name,
            amount,
            category,
            date: todaysDate,
            time,
            description,
        };

        props.handleAddSpent({newSpent});
        props.setShowModal(false);
    };
    
    return (
        <>
            {props.showModal && (
                <div className="modal">
                <div className="modal__container">
                    <button className="modal__close" onClick={handleClose}>
                    X
                    </button>
                    <h2 className="modal__title">Agregar Gasto</h2>
                    <form className="modal__form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Nombre" required onChange={(e) => setNombre(e.target.value)} className="form__input" minLength="3" maxLength="50" id="name"/>
                        <input type="number" placeholder="Monto" required onChange={(e) => setMonto(e.target.value)} className="form__input" id="amount"/>
                        <input type="text" placeholder="Categoria" required onChange={(e) => setCategoria(e.target.value)} className="form__input" minLength="3" id="category"/>
                        <div className="form__date-time">
                            <input type="date" value={todaysDate} onChange={(e) => setTodaysDate(e.target.value)} required className="form__input date-time" id="date"/>
                            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required className="form__input date-time" id="time"/>
                        </div>
                        <input type="text" placeholder="Descripcion" onChange={(e) => e.target.value ? setDescripcion(e.target.value) : setDescripcion("")} minLength="3" className="form__input" id="description"/>
                        <button type="submit" className="send-button">Agregar</button>
                    </form>
                </div>
                </div>
            )}
        </>
    );
}

export default AddSpentModal;