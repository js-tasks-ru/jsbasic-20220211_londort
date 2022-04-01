function showSalary(users, age) {
  let y = users.filter(item => item.age <= age)
               .map (function(el){
                  return el.name + ', ' + el.balance;
               })
               .join('\n');
 	return y;
};
