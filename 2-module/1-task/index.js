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
		a = typeof salaries[prop];
  	if (a === 'number' && (!NaN || !Infinity || !-Infinity)) {
    	sum += salaries[prop];
  	};
	};
  return sum;
};

sumSalary(salaries);
