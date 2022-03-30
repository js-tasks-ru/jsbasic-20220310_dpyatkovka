let calculator = {
  num1: null,
  num2: null,
  sum(){
    return this.num1 + this.num2;
  },
  mul(){
    return this.num1 * this.num2;
  },
  read(num1, num2){
    this.num1 = num1;
    this.num2 = num2;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
