/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = document.createElement('table');
    this.render();
    this.template();
    this.closeBtn();
  }

  render() {
    this.elem.innerHTML = 
    `<table>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${this.template()}
      </tbody>
    </table>`;
  }

  template() {
    return `
      ${this.rows.map(item => `
      <tr>
      <td>${item.name}</td>
      <td>${item.age}</td>
      <td>${item.salary}</td>
      <td>${item.city}</td>
      <td class="closebtn">[X]</td>
      </tr>`).join('')}`;
  }
  
  closeBtn() {
    let btns = Array.from(this.elem.querySelectorAll('.closebtn'));
    for (let item of btns) {
      item.onclick = () => {
        item.parentElement.hidden = true;
      }
    }
  }  
}
