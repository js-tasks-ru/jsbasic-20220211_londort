function highlight(table) {
  // let tbody = document.querySelector('tbody');
  let tbody = table.lastElementChild;
  let tr = tbody.rows;
  let trArr = Array.from(tr);
  for ( row of trArr ) {
    let td = row.cells;
    let tdArr = Array.from(td);

    for (i = 0; i < tdArr.length; i++) {
      if (tdArr[2].innerHTML === 'm') {
        row.classList.add('male');
      }else {
        row.classList.add('female');
      };

      if (tdArr[3].dataset.available === 'true') {
        row.classList.add('available');
      }else if (tdArr[3].dataset.available === 'false') {
        row.classList.add('unavailable');
      }else {
        row.hidden = true;
      };

      let age = Number(tdArr[1].innerHTML);
      console.log(age);
      if (age < 18) {
        row.style.textDecoration = "line-through";
      }
    }
  }
}
