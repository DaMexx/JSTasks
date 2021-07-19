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
  //добавил проверку на 0 и 1
  if (n == 0) {
    return [];
  } else if (n == 1) {
    return [1];
  }

  let arrFib = [0, 1];

  //исправил значение аргументов, тк изначально указал просто число, а не позицию в массиве
  for (let i = 2; i < n; i++) {
    let firstNum = arrFib[i - 1];
    let secondNum = arrFib[i - 2];
    arrFib.push(firstNum + secondNum)
  }

  return arrFib;
}
console.log(fib(7));


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

Ответ:
1 2 3
8 9 4
7 6 5*/


//создание новой матрицы
function makeMatrix(n) {
  let result = new Array(n).fill().map(() => Array(n).fill(''));

  for (i = 0; i <= result.length; i++) {
    if (Array.isArray(result[i])) {
      result[i]/*.fill(7)*/
    }
  }

  return result
}


console.log(makeMatrix(3));

let arr = [];
arr.fill();



let arr = new Array(3)


//черновик
// let arr = new Array(3)
// let arrO = new Array(3).fill('')
// let arr1 = new Array(3).fill('')
// let arr2 = new Array(3).fill('')
// arr[0] = arrO
// arr[1] = arrO
// arr[2] = arrO
// for (let i = 1; i <= arr[0].length; i++) {
//   arr[0][i - 1] = i
// }
// for (let i = 1; i <= arr[1].length; i++) {
//   arr[1][i - 1] = i
// }
// for (let i = 1; i <= arr[2].length; i++) {
//   arr[2][i - 1] = i
// }
// console.log(arr)






//еще способ задать массив
// function newArr(n) {

//   let arr = new Array(n);
//   let arrN = new Array(n);
//   let count = 0
//   for (let i = 1; i <= arr.length; i++) {
//     arr[i - 1] = arrN;
//   }

//   return arr
// }
// console.log(newArr(5))


function makeArr(length) {
  let arr = [];
  for (let i = 0; i <= length; i++) {
    return arr[i];

  }
  return arr
}
console.log(makeArr(5))



function newArr(n) {

  let arr = new Array(n);
  let arrN = new Array(n);
  let count = 0
  for (let i = 1; i <= arr.length; i++) {
    arr[i - 1] = arrN;
  }

  return arr
}
console.log(newArr(3))





function makeArr(n) {
  let = arr = [];

  for (let i = 0; i < n; i++) {
    arr[i] = Array(n);
  } 

  for (let i = 0; i < arr.length; i++) {
    arr[0][i++] = i
  } 


    // arr[1][arr[1].length-1]=i++

  return arr
}

console.log(makeArr(3))