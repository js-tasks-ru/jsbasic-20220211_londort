let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
};

let sum = 0;

function sumSalary(salaries) {
  for (prop in salaries) {
		a = typeof salaries[prop]; // вычислили тип данных свойств
  	if (a === 'number' && (!NaN || !Infinity || !-Infinity)) { //убрали ненужные типы
    	sum += salaries[prop]; // сложили между собой 
  	};
	};
  return sum;
};

sumSalary(salaries);
