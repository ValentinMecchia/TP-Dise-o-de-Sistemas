import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

function PercentafeSpentsChart({ spents }) {
  let spentsDict = {};
  let spentsAmountDict = {};
  let spentsPromGroupLabel = {};
  let spentsPromFinal = {};

  for (const spent of spents) {
    if (spentsDict[spent.groupLabel]) {
      spentsDict[spent.groupLabel].push(spent)
      spentsAmountDict[spent.groupLabel].push(spent.amount)
    } else {
      spentsDict[spent.groupLabel] = [spent]
      spentsAmountDict[spent.groupLabel] = [spent.amount]
    }
  }

  let groupColors = {};
  for (let spent in spentsDict) {
    groupColors[spent] = spentsDict[spent][0].color
  }

  let relativeFrecuencySpents = 0;

  for (let spent in spentsAmountDict) {
    const promGroupLabel = spentsAmountDict[spent].reduce((acc, elem) => acc + elem, 0) / spentsAmountDict[spent].length;
    spentsPromGroupLabel[spent] = promGroupLabel;
    relativeFrecuencySpents += promGroupLabel;
  }
  
  for (let spent in spentsPromGroupLabel) {
    const promFinal = spentsPromGroupLabel[spent] / relativeFrecuencySpents;
    spentsPromFinal[spent] = promFinal
  }

  let data = [];
  let idGropuLabel = 0;

  for (const spent in spentsPromFinal) {
    data.push({id: idGropuLabel, value: spentsPromFinal[spent], label: [`${spent} ($${spentsAmountDict[spent].reduce((acc, elem) => acc + elem, 0)})`], color: groupColors[spent]})
    idGropuLabel++
  }

  const valueFormatter = (spent) => {
    return `${(spent.value * 100).toFixed(0)}%`;
  };

  return(
      <PieChart
        series={[
          {
            data,
            highlightScope: { fade: 'global', highlight: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
            valueFormatter,
            cornerRadius: 5,
            paddingAngle: 3,
            innerRadius: 30,
            outerRadius: 100,
          },
        ]}
        width={200}
        height={200}
    />
  )
}

export default PercentafeSpentsChart