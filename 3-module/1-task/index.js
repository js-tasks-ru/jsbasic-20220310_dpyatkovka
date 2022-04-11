function namify(users) {
  let result = [];
  
  for (let userObj of users ){
    for (let key in userObj){
      if (key === 'name'){
        result.push(userObj[key]);
      }
    }
  }
  
  return result;
}
