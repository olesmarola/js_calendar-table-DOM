'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const table = document.createElement('table');
  const thead = `
    <thead>
    <td>пн</td>
    <td>вт</td>
    <td>ср</td>
    <td>чт</td>
    <td>пт</td>
    <td>сб</td>
    <td>вс</td>
    </thead>`;
  const date = new Date(year, month - 1);
  let tableRow = thead;

  tableRow += `<tbody><tr>`;

  let emptyCells = date.getDay() - 1;

  if (emptyCells === -1) {
    emptyCells = 6;
  }

  for (let i = 0; i < emptyCells; i++) {
    tableRow += `<td></td>`;
  }

  const currentMonth = date.getMonth();

  while (currentMonth === date.getMonth()) {
    if (date.getDay() % 6 === 1) {
      tableRow += `</tr><tr>`;
    }
    tableRow += `<td>${date.getDate()}</td>`;
    date.setDate(date.getDate() + 1);
  }

  while (date.getDay() % 6 !== 1) {
    tableRow += `<td></td>`;
    date.setDate(date.getDate() + 1);
  }

  tableRow += `</tr></tbody>`;

  table.innerHTML = tableRow;
  element.append(table);
}

calendarTable(2019, 10, calendar);
