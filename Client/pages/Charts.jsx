import React from 'react';
import "./styles/Charts.css";
import PercentageSpentsChart from '../components/PercentageSpentsChart';
import AmountHistory from '../components/AmountHistory';

function Charts({ spents }) {
  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const actualMonth = months[new Date().getMonth()];
  const actualYear = new Date().getFullYear()

  return (
    <div className="charts-container">
      <h2>Graficos</h2>
      <h3>Distribucion categorica de gastos de {actualMonth} del {actualYear}</h3>
      <PercentageSpentsChart spents={spents} />
      <h3>Distribucion de gastos segun monto en {actualYear}</h3>
      <AmountHistory spents={spents} />
    </div>
  )
}

export default Charts