function showSalary(users, age) {
  let x = users.filter(item => item.age <= age)
  let y = '';
  x.map (function(el, index){
    if (index == x.length - 1) {
      y += `${el.name} ${el.balance}`;
    } else {
      y += `${el.name} ${el.balance}\n`;
    }
  }).join('')
 	return y;
}

let user1 = {
  "balance": "$1,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 21,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let users = [user1, ...rest];

let result = showSalary(users, 40);
result
