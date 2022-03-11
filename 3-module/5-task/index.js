function getMinMax(str) {
  let a = str.split(' ')
  let b = a.filter(function(elem) {
    return Number(elem);
  })
  let c = b.map(val => +val)
  let max = Math.max.apply(null, c)
  let min = Math.min.apply(null, c)
  let result = {
    min: min,
    max: max
  };
  return result
}
