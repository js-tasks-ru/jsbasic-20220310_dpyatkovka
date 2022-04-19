function getMinMax(str) {
  let StrToArray = str.split(' ');
  let FilteredArray = StrToArray.filter(item => !isNaN(item));

  return { min: Math.min(...FilteredArray), max: Math.max(...FilteredArray) };
}
