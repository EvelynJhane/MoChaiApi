const costWithTax = (arr) => arr.map(n => Number((n * 1.0625).toFixed(2)));

const fahrenheitToCelsius = (tempF) => {
    let tempC = (tempF-32)*5/9;
  
    return `${tempF}°F is ${tempC}°C.`,`tempC = ${tempC}`;
}

const fizzBuzz = (maxNum) => {
    let multiplesOfMaxNum = [];
    for(let i=1; i<=maxNum; i++){
        
        if (i % 3 === 0 && i % 5 === 0){
            multiplesOfMaxNum.push('FizzBuzz');
        }
        else if (i % 3 === 0){
            multiplesOfMaxNum.push('Buzz');
        }
        else if (i % 5 === 0){
        multiplesOfMaxNum.push('Fizz');
        }
        else {
          multiplesOfMaxNum.push(i).toString();
        }
    }
    return multiplesOfMaxNum
}


module.exports = {
    costWithTax,
    fahrenheitToCelsius,
    fizzBuzz
};
