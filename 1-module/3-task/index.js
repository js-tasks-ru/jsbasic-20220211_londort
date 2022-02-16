function ucFirst (str) {
  if (str == false) {
    return str
  }
  let trimmer = str.trim();
  let upperCase = trimmer[0].toUpperCase();
  return upperCase + trimmer.slice(1);
}

ucFirst(``);
ucFirst(`ваня`);
