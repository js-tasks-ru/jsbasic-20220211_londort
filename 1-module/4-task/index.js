function checkSpam (str) {
  let a = str.toLowerCase();
  
  if (a.includes('1xbet') || a.includes('xxx')) {
    return true;
  } else {
    return false;
  }
}

console.log(checkSpam('checkXxX'));
console.log(checkSpam('она смотрит одИнxbet'));
console.log(checkSpam('она смотрит 1xBEt'));
