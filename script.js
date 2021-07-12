//1) Написать рекурсивную функцию вычисления чисел Фибоначчи. На вход функции подавать длину конечного массива чисел.
//неверное решение условия
function fib(n) {
  if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}
fib();


//решение через возврат массива
// let arrFib = [0, 1, 1];
function fib(n) {
  let arrFib = [0,1];
  for (let i = 2; i <= n; i++) {
    let firstNum = i-1;
    let secondNum = i-2;
    arrFib.push(firstNum + secondNum)
  }
  return arrFib
}
console.log(fib(7))

//2) Функция. Принимает массив строк. Должна вернуть массив результатов проверки двух строк. Если у одной строки с последующей первый и последний символы, то true. Например ["asd", "afffd", "cc", "kk"]. Для такого массива функция должна вернуть [true, false, false]

function makeNewArr(arr) {
  let result = [];

  for (let i = 0; i < (arr.length - 1); i++) {
    let firstValue = arr[i];
    let secondValue = arr[i + 1];

    if (firstValue[0] == secondValue[0] && firstValue.slice(-1) == secondValue.slice(-1)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}
makeNewArr(["asd", "afffd", "cc", "kk"]);


//3) Написать функцию, которая принимает целочисленный number и рисует спиральную матрицу NxN, где N - входной параметр.
/*Например,
matrix(3)

//создание новой матрицы
function makeMatrix(n) {
  let newMatrix = new Array(n).fill().map(() => Array(n).fill(0));
  return newMatrix;
}
console.log(makeMatrix(5));


Ответ:
1 2 3
8 9 4
7 6 5*/
