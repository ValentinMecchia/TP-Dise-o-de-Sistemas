import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

function AmountHistory({ spents }) {
  let monthSpentsDict = [];
  const actualYear = new Date().getFullYear();
  const actualMonth = new Date().getMonth();
  let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  for (const spent of spents) {
    if (spent.date.slice(0, 4) == actualYear) {
      let month = parseInt(spent.date.slice(5, 7));
      if (!(month in monthSpentsDict)) {
        monthSpentsDict[month] = 0
      }
      monthSpentsDict[month] += spent.amount;
    }
  }
  
  let arrMonthsLabel = [];
  let arrSpentsMonths = [];
  let count = 0
  for (let i = 0; i < 12; i++) {
    let month = actualMonth - count;
    if (month < 0) {
      month += 12;
    }
    arrMonthsLabel.push(months[month]);
    if (month in monthSpentsDict) {
      arrSpentsMonths.push(monthSpentsDict[month]);
    } else {
      arrSpentsMonths.push(0);
    }
    count++;
  }

  console.log(arrSpentsMonths)

  return (
    <LineChart
      height={300}
      series={[
        { data: arrSpentsMonths,
          area: true,
        },
      ]}
      xAxis={[{ scaleType: 'point', data: arrMonthsLabel, label: "Meses" }]}
      yAxis={[{ width: 50, label: "Monto gastado" }]}
/>
  )
}

export default AmountHistory