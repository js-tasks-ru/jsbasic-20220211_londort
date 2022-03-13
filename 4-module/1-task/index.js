function makeFriendsList(friends) {
  let firstName, lastName;
  let ul = document.createElement('ul');
  for (val of friends) {
    firstName = val.firstName;
    lastName = val.lastName;
    let li = document.createElement('li');
    li.innerHTML += firstName + ' ' + lastName;
    ul.append(li)
  }
  return ul;
}
