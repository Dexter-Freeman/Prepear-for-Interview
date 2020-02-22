i//  Что выдаст результат сравнения
let a = {
    name : 'test'
}

let b = { 
    name : 'test'
}

console.log(`a == b ${a == b}`);
console.log(`a === b ${a === b}`);
// ---------------------------

// Вывести на экран числа, находящиеся под главной диагональю матрицы

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
      console.log(`num - ${num}`)
    }
    return;
  })
});
// --------------------------

// Развернуть одномерный массив без создания дополнительного массива