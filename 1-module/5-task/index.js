function truncate(str, maxlength) {
  if(maxlength === null || isNaN(maxlength) || maxlength < 1){
    return '';
  }
  
  if(str.length > maxlength){
    return str.slice(0, maxlength-1) + '…';
  }
  
  return str;
}
