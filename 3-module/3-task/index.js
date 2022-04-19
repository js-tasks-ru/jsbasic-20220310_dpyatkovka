function camelize(str) {
  let arr = str.split("-");
  let result = [];
  
  for (let i = 0; i < arr.length; i++){
    if (i !== 0 && arr[i] !== ''){
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    result.push(arr[i])
  }
  
	return result.join('');
}
