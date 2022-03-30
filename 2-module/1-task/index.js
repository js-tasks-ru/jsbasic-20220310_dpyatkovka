function sumSalary(salaries) {
  let result = 0;

  for(let key in salaries){    
    let isNumber = parseInt(salaries[key]);
    
    if( !isNaN(isNumber) ){
    	result = result + isNumber;
    }
  }

  return result;
}
