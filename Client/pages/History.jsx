import React from "react";
import "./styles/History.css";

function History( {spents} ) {
    if (!Array.isArray(spents)) {
        return (
            <div className="no-spents">
                <p>Lista de gastos inválida.</p>
            </div>
        );
    }

    spents.sort((a, b) => {
        const dateTimeA = new Date(`${a.date}T${a.time}`);
        const dateTimeB = new Date(`${b.date}T${b.time}`);
        return dateTimeB - dateTimeA;
    })
    console.log(spents);

    const actualYear = new Date().getFullYear();

    const spentsByMonth = {}
    spents.forEach(spent => {
        let month = "";
        if (spent.date.slice(0, 4) == actualYear) {
            month = new Date(spent.date).toLocaleDateString("default", {month: "long"});
        } else {
            month = new Date(spent.date).toLocaleDateString("default", {month: "long", year: "numeric"});
        }

        month = month.charAt(0).toUpperCase() + month.slice(1);

        if (!spentsByMonth[month]) {
            spentsByMonth[month] = [];
        }

        spentsByMonth[month].push(spent);
    });

    console.log(spentsByMonth)


    return (
        <div className="history">
            <h2>Hisotrial de gastos</h2>
            <div className="spents-list">
                {Object.entries(spentsByMonth).length !== 0 ? (
                    Object.entries(spentsByMonth)
                        .sort((a, b) => b[0] - a[0])
                        .map(([month, arrMonth]) => {
                            return (
                                <div key={month} className="spent-day">
                                    <p className="month__title">{month}</p>
                                    {arrMonth.map((spent, index) => (
                                        <div key={index} className="spent-item">
                                            <div className="item__category-circle" style={{backgroundColor: spent.color}}></div>
                                            <div className="item__text">
                                                <div className="text__name-category">
                                                    <p className="item__name">{spent.name}</p>
                                                    <p className="item__category">{spent.category}</p>
                                                </div>
                                                <div className="text__amount-time">
                                                    <p className="item__amount">${spent.amount}</p>
                                                    <p className="item__time">{spent.time}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            );
                        })
                ) : (
                    <div className="no-spents">
                        <p>No hay gastos registrados.</p>
                    </div>
                )}
            </div>
        </div>

    );
}

export default History;