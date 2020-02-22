//  1 - Что выдаст результат сравнения
let a = {
  name : 'test'
};

let b = { 
  name : 'test'
};

console.log(`a == b ${a == b}`); // false
console.log(`a === b ${a === b}`); // false
// В JS обьекты передаются по ссылке, соответственно и сравнение будет идти по ссылкам

// ---------------------------

// 2 -  Вывести на экран числа, находящиеся под главной диагональю матрицы

const matrix = [ 
[1, 4, 8, 9,],
[6, 2, 11, 1,],
[8, 0, 3, -5,],
[-2, 10, 8, 1]
];

const printUnderMainDiag = (matrix) => {
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < i; j++) {
    console.log(`matrix - ${matrix[i][j]}`);
  }
}
};

printUnderMainDiag(matrix);

matrix.forEach((str, outerIndx) => {
str.forEach((num, innerIndx) => {
  if ( innerIndx < outerIndx ) {
    console.log(`num - ${num}`);
  }
  return;
})
});
// --------------------------

// 3 -  Развернуть одномерный массив без создания дополнительного массива

let arr = [1, 4, 8, 9,];

console.log(`arr before reverse - ${arr}`);

arr.reverse();

console.log(`arr after reverse - ${arr}`);

for (let i = arr.length - 1; i >= 0; i--) {
arr.push(arr[i]);
}
console.log(`arr after push - ${arr}`);

for (let i = 0; i <= arr.length / 2 + 1; i++ ) {
arr.shift();
}
console.log(`arr after shift - ${arr}`);

// ---------------------------------

// 4 - Что получится в результате

console.log('1' + 2); // '12'
console.log(1 + '2'); // '12'
console.log(1 + 2 + '2'); // '32'

// --------------------------------

// 5 - что выведет

console.log(typeof null); // Object

// -------------------------------

// 6 - Что выведет console.log?
let s = 'Hello';

const F = a => {   
a = 'Ura-a-a-h';
};

F(s);

console.log(`F(s) - ${s}`);;  // 'Hello'

let o = {
hello: 'Hello'
};

F(o);

console.log(`F(o) - ${o}`); // [object Object]

// ----------------------------

//  7 - Что выведет console.log?

const o2 = { s: 'Hello' };

const G = obj => {  
 obj.s = 'Ura-a-a-h'; // obj ссылается на тот же сектор памяти что и о2
};

G(o2);

console.log(`G(o2) - ${o2.s}`); // 'Ura-a-a-h'

// ---------------------------------

// 8 - есть массив чисел. Найдите максимальное

const nums = [2, 6 , -5, 0, 0.6, 10, 50, -100];

let max = nums[0];

for (let i = 0; i < nums.length; i++) {
// if ( nums[i] > max ) {
// 	max = nums[i];
// }
max = nums[i] > max ? nums[i] : max;
}

console.log(`max - ${max}`); // 50

// -----------------------------------------------

// 9 - что выведет в консоль

for (var i = 0; i < 3; i++) {
setTimeout(function () {
  console.log(i);
}, 0);
} 

// В консоль выведется три раза число 3, поскольку в цикле использется
// ключевое слово var, которое создает переменную i в глобальной 
// области видимости

for (let i = 0; i < 3; i++) {
setTimeout(function () {
  console.log(i);
}, 0);
} 
//  В коносль выведется 0  1 2, т.к. используется ключевое слово let
// которое создает локальную переменную и через замыкание она будет запоминаться

for (var i = 0; i < 3; i++) {
setTimeout(function (i) {
  console.log(i);
}, 0, i);
} 

// В setTimeout можно передавать аргументы

// ----------------------------------------------------------

// 10 есть список строк. Найти строки, которые являются палиндромами
const strings = ['a', 'aa', 'abc', 'aba', 'sdg'];

function isPalindrome(str) { // это решение я делел ранее на FCC
  const clearStr = str.replace(/\W|_/g, '').toLowerCase();
  let end = clearStr.length - 1;
  for (let i = 0; i <= end; i++) {
    if (clearStr[i] !== clearStr[end]) {
      return false;
    }
    end--;
  }
  return true;
};

for (let i = 0; i < strings.length; i++) {
  if ( isPalindrome(strings[i]) ) {
    console.log(`palindrome - ${strings[i]}`);
  }
}

strings.forEach(str => {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
    }
  if ( str === reversed ) {
    console.log(`string is palindrome - ${str}`);
  }
});

// -----------------------------------------------------