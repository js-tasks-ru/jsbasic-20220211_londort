function makeDiagonalRed(table) {
  for (i = 0; i < table.rows.length; i++) {
    let a = table.rows[i];
    a.cells[i].style.backgroundColor = 'red'
  }
}
