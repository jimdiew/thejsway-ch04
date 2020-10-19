// Carousel
for (numberOfTurns = 1; numberOfTurns <= 10; numberOfTurns++){
  console.log(`Carousel turn number ${numberOfTurns}`);
}









// FizzBuzz
let number = 1;
while (number <= 100) {
  const divisibleBy3 = number % 3 === 0;
const divisibleBy5 = number % 5 === 0;
  
if (divisibleBy3 && divisibleBy5) {
  console.log("FizzBizz");
} else if (divisibleBy3){
  console.log("Fizz");
} else if(divisibleBy5) {
  console.log("Bizz");
} else {
  console.log(number);
}
  number++;
  }