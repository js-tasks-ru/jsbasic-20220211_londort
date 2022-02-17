function ucFirst (str) {
  if (!str) {
    return str
  }
  let upperCase = str[0].toUpperCase();
  return upperCase + str.slice(1);
}

ucFirst(``);
ucFirst(`ваня`);
