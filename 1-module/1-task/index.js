function factorial(n) {
  if ( n === 0 ){
  	return 1;  
  }
  
  if ( isNaN(n) ){
    return 'Not a Number!';
  }
  
	for ( i = n-1; i > 0; i-- ) {
  	n = n * i;
	}

  return n;
}
