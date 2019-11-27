'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  const date = new Date(year, month - 1);
  const table = document.createElement('table');
  const thead = document.createElement('th');
  const tbody = document.createElement('tbody');
  const tr = document.createElement('tr');

  for (let i = 0; i < week.length; i++) {
    const column = document.createElement('td');

    column.innerHTML = week[i];
    thead.append(column);
  }

  let cellEls = `<tr>`;
  let emptyCells = date.getDay() - 1;

  if (emptyCells === -1) {
    emptyCells = 6;
  }

  for (let i = 0; i < emptyCells; i++) {
    cellEls += `<td></td>`;
  }

  const currentMonth = date.getMonth();

  while (currentMonth === date.getMonth()) {
    if (date.getDay() % 6 === 1) {
      cellEls += `</tr><tr>`;
    }
    cellEls += `<td>${date.getDate()}</td>`;
    date.setDate(date.getDate() + 1);
  }

  while (date.getDay() % 6 !== 1) {
    cellEls += `<td></td>`;
    date.setDate(date.getDate() + 1);
  }

  cellEls += `</tr>`;

  tr.append(thead);
  table.append(tr);

  const bodyWrapper = document.createElement('tr');

  bodyWrapper.append(tbody);
  table.append(bodyWrapper);
  tbody.innerHTML = cellEls;
  element.append(table);
}

calendarTable(2019, 10, calendar);
