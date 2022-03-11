function filterRange(arr, a, b) {
  let x = arr.filter(function(elem) {
    return elem >= a && elem <= b;
  });
  return x;
}
