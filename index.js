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

// 11 Напишите рекурсивную функцию на примере поиска чисел Фибоначчи. 
// На вход функция получает порядковый номер числа, а возвращает само число

const fib = (n) => {
	return n <= 1 ? n : fib(n - 1) + fib(n - 2);
};

console.log(`fib 5 - ${fib(5)}`);
console.log(`fib 6 - ${fib(6)}`);
console.log(`fib 7 - ${fib(7)}`);

// ------------------------------------------------

// 12 Зачем нужны функции call и apply?

// call и apply нужны для замены контекста вызова

const  myCar = {
	brand: 'Tachila'
};

const someCar = {
	brand: 'someCar',
	move() {
		console.log(`${this.brand} is moving`);
	}
};

someCar.move();

someCar.move.apply(myCar);
someCar.move.call(myCar);

// функция call() принимает список аргументов, в то время, как функция apply() - одиночный массив аргументов.

// --------------------------------

// 13 - что выведет в консоль

var i = 10;

function foo(i) {
	console.log(i);
}

foo(); // undefined
// в функцию foo не был передан аргумент, значит в ней i  равент undefined

// -----------------------------

// 14 - 
// Задача:
// Вам необходимо создать приложение для автоматизации работы погрузочных кранов, 
// позволяющих перемещать плиты между грузовыми автомобилями на крупной строительной площадке.
// Приложение должно предоставлять кранам последовательность разгрузки, 
// оптимальную для переноса груза с автомобиля на автомобиль, учитывая следующее:
// ● плиты размещаются на автомобилях одна над другой (от 3 до 8 штук в высоту), и отсортированы по весу (от тяжелых - снизу, к легким - сверху)
// ● кран может снимать и перемещать только самую верхнюю плиту с грузовика, и при разгрузке не может устанавливать более тяжелые плиты на более легкие
// ● перенос груза с загруженного автомобиля на пустой нужно осуществить используя только одно дополнительное место для временного хранения плит

// Входящие параметры:
// Количество плит на автомобиле, который требуется разгрузить (от 3 до 8)

// Выходные данные:
// Стратегия перемещения плит с автомобиля на автомобиль:
// ● #1 slot_a -> slot_c
// ● #2 slot_a -> slot_b
// ● #1 slot_c -> slot_b
// ● ...
// где: slot_a - разгружаемый автомобиль, slot_b - дополнительное место для промежуточного хранения плит, slot c - пустой автомобиль, куда нужно перенести весь груз, #n - номер перемещаемой плиты.


// это задача про Ханойскую башню

const car1 = [400, 300, 200, 100];
const buffer = [];
const car2 = [];

let slabNumber = car1.length;

function crane(stack, fromCar, buffer, toCar) {
    if (stack >= 1) {
        crane(stack - 1, fromCar, toCar, buffer);
        moveSlab(fromCar, buffer);
        crane(stack - 1, toCar, buffer, fromCar);
    }
};

function moveSlab(from, to) {
    to.push(from.pop());
};

crane(slabNumber, car1, car2, buffer);

console.log(car1, buffer, car2);

// ------------------------------------

// 15 - Чем отличается var от const и let? Можно ли добавить в const еще одно значение? 

// до ES6 (EcmaScript 2015) было всего две области видимости - функциональная и глобальная

var m = 100;

if (true) {
	var m = 0;
}

console.log(`var m  - ${m}`); // 0

// поэтому все что объявлется через var не внутри функции доступно и снаружи

function testVar() {
	var testV = 10;
};

// console.log(`testV - ${testV ? testV : 'Error'}`); // ReferenceError: testV is not defined

let k = 100;

if (true) {
	let k = 0;
};

console.log(`let k  - ${k}`); // 100

// let обладает блочной областью видимости {} и вне скобок не доступно


for (var i = 0; i < 5; i++ ) { //var
	setTimeout(function() {console.log(i, '326'); } , i * 1000 );
};

//Этот код 5 раз выведет число 5 

for (let i = 0; i < 5; i++ ) { //let
	setTimeout(function() {console.log(i, '332'); } , i * 1000 );	
};

//а этот код выведет последовательно 0,1,2,3,4

// чтобы и через var выводило 0,1,2,3,4 нужно сделать самовызывающуюся функцию
for (var i = 0; i < 5; i++ ) {
	(function(x) {
		setTimeout(function() {console.log(i, '340'); } , x * 1000 );
	})(i)
};
// const создает "константу", которую нельзя преприсваивать (изменять через знак =), но ее в принципе можно изменить

// ------------------------------------------

// 16 - Как работает всплытие в let и var и что такое Всплытие в целом? 

console.log(`f  - ${f}`); //undefined undefined - на момент вызова console.log f и d уже объявлены интерпретатором, но еще не присвоены значения, f и d "всплыли"

var f = 1;

// console.log(p); // error   - p и l не "всплывают"

let p = 3;

console.log(`p  - ${p}`); // 3 4

// let и const не всплывают

// ----------------------------------------------

// 17 - Пример: Есть следующий код. Вопрос: Что будет в консоли и почему?

// let e = 123;
// function e() {};
// console.log(`e - ${e}`); // SyntaxError: Identifier 'e' has already been declared

// если сделать через var, то все будет работать

var w = 123;
function w() {};
console.log(`w - ${w}`); // w - 123

// ----------------------------------------

// 18 - Что такое Деструктуризация?

function dest() {
	return {
		x: 100,
		y: 200
	}
};

let {z, y} = dest(); // необходимо чтобы создаваемые переменные соответствовали именам внрутри объекта

console.log(`z - ${z}   y - ${y}`);

// --------------------------------------------------

// 19 - Что такое this?

// this это контекст вызова

// console.log(this); // выведется глобальный объект Window

const show = {
	name: 'showName',
	showThis() {
		console.log(`this of ${this.name} -  ${JSON.stringify(this)}`);
	}
};

show.showThis();

const show2 = {
	name: 'show2Name'
};

show.showThis.bind(show2)();

// -----------------------------------------

//20 Что выведет этот код?

function User() { }
User.prototype = { admin: false };

let user = new User();
alert(user.admin);

// -----------------------------------------------

//21 Есть ли разница между вызовами i++ и ++i?

// Разница в значении, которое возвращает такой вызов.  +
// Разница в значении i после вызова.
// Нет никакой разницы.

// --------------------------------------------

//22 Что выведет alert?

let arr = [1, 2, 3];
arr.something = 5;

alert(arr.something); // 5

//5


// ---------------------------------------

// 23 Чему равно это выражение?

[].push(1,2).unshift(3).join()

// ----------------------------------------------

//24 Какой оператор из этих выполняет не только математические операции?

// *
// /
// +     + (конкатенация строк)
// -
// >>>

// -----------------------------------------

//25 Что выведет код ниже?

let obj = {'1': 0, 1: 1, 0: 2};

alert(obj['1']);

// 1

// -----------------------------------

//26 Какие из этих вызовов синтаксически верно сгенерируют исключение?

// throw "Ошибка"  +
// throw new Error("Ошибка")  +
// throw { message: "Ошибка" }  +
// throw Error("Ошибка")  +
// Ни один.


// ------------------------------------------------

//27 Чему равна длина arr.length массива arr?

let arr = [];
arr[1] = 1;
arr[3] = 33;

// 4

// ------------------------------------------

//28 Что выведет этот код?

fo.call(fo);

function fo() {
  alert( this );
}

// [object Object]
// код функции fo.     +
// ошибка: слишком глубокая рекурсия.
// ошибка: переменная f не определена.  
// другое.
