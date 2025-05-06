import React from "react";
import "../styles/SpentsList.css";

function SpentsList({ spents }) {
    if (!Array.isArray(spents)) {
        return (
            <div className="no-spents">
                <p>Lista de gastos inválida.</p>
            </div>
        );
    }

    const actualMonth = new Date().getMonth() + 1;
    const actualDay = new Date().getDate();
    const actualYear = new Date().getFullYear();

    const weekDays = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let daysDict = {}

    for (let spent of spents) {
        const month = spent.date.slice(5,7)
        const day = spent.date.slice(8,10)
        if (month == actualMonth) {
            if (daysDict[day]) {
                daysDict[day].push(spent)
            } else {
                daysDict[day] = [spent]
            }
        }
    }


    return (
        <div className="spents-list">
            {Object.entries(daysDict).length !== 0 ? (
                Object.entries(daysDict)
                    .sort((a, b) => b[0] - a[0])
                    .map(([day, arrDay]) => {
                        const dayDate = `${actualYear}-${actualMonth}-${day}`;
                        const actualWeekDayNum = new Date(dayDate).getDay();
                        const actualWeekDay = weekDays[actualWeekDayNum];
                        return (
                            <div key={day} className="spent-day">
                                <p className="day__title">{day == actualDay ? "Hoy" : actualWeekDay + " " + day}</p>
                                {arrDay.map((spent, index) => (
                                    <div key={index} className="spent-item">
                                        <div className="item__category-circle"></div>
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
    );
}

export default SpentsList;
