import React from "react";
import "./styles/Home.css";
import SpentsList from "../components/SpentsList";

function Home(props) {

  const date = new Date();
  const day = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
  const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
  const year = date.getFullYear();
  const fullDate = day + "/" + month + "/" + year;

  return (
    <div className="home">
      <div className="home__date">
        <p>
          {fullDate}
        </p>
      </div>
      <div className="home__money-container">
        <div className="money-spent money-box">
          <p className="money__title">
            Dinero Gastado
          </p>
          <p className="money__amount">
            ${props.money[0]}
          </p>
        </div>
        <div className="money__remaining money-box">
          <p className="money__title">
            Dinero Restante
          </p>
          <p className="money__amount">
            ${props.money[1]}
          </p>
        </div>
      </div>
      <div className="home__spent-list">
      <SpentsList spents={props.spents}></SpentsList>
      </div>
    </div>
  );
}

export default Home;