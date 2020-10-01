function calculate(num1, num2, setNum1, operator) {
  switch (operator) {
    case "+":
      setNum1(parseInt(num2) + parseInt(num1));
      break;
    case "-":
      setNum1(parseInt(num2) - parseInt(num1));
      break;
    case "*":
      setNum1(parseInt(num2) * parseInt(num1));
      break;
    default:
      setNum1(parseInt(num2) / parseInt(num1));
      break;
  }
  return setNum1;
}
export default calculate;
