function getNumbers() {
  const numbers = [0,1,2,3,4,5,6,7,8,9];
  const data = [];
  for (let index = 0; index < 4; index++) {
    let rnd = Math.ceil(Math.random() * numbers.length -1);
    data.push(numbers[rnd]);
    numbers.splice(rnd, 1);
  }
  return data;
}

const answer = getNumbers();
const value = '2943'; // 4개를 모두 맞춰야한다.

const intValue = value.split('').map((v) => parseInt(v));

console.log(intValue);

let s = 0;
let b = 0;

answer.forEach((v,i)=>{
  if (intValue.includes(v)) {
    if (intValue.indexOf(v) === i) {
      ++s;
    }
    ++b;
  }
});

console.log(intValue, answer);
console.log(s, b);
// 같다면.

// if (answer === .join('')) {
//   console.log(v);
// } else {

// }

