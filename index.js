
/* 

Написати функцію, яка приймає один параметр. При першому виклику вона запам'ятовує його, при другому — підсумовує переданий параметр з тим, що передали перший раз і тд. 
Все це із замиканнями, наприклад: 

console.log(sum(3)) // 3 
console.log(sum(5)) // 8 
console.log(sum(20)) // 28

*/

function getSum(addend1 = 0) {
  return function (addend2) {
    return (addend1 += addend2);
  };
}

const sum = getSum();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));

