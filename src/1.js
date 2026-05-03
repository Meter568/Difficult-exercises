/*         
#1 Don't repeat more than n times

Дан массив целых чисел и число n - количество допустимых повторений чисел.
Необходимо создать новый массив, содержащий каждое число из исходного массива не более n
раз, без изменения порядка исходных элементов.

Например, если число n равно 2, а входной список равен [1,2,3,1,2,1,2,3], то вернется
массив [1,2,3,1,2,3].

Еще пример: дан массив [20,37,20,21] и число n = 1. Вернется массив [20,37,21].

Таким образом, функция должна принимать 2-а аргумента:
    - массив целых чисел и
    - целое число - количество допустимых повторений

Она должна возвращать новый массив. Если передан пустой массив, то он и вернется.
Если в массиве есть дробные числа, то они должны округляться до
ближайшего меньшего целого.

Решение должно быть оптимальным по алгоритму 
*/

"use strict";

function limitOccurrences(array, n) {
    let resultArray = [];
    if (array.length === 0) {
        return resultArray;
    }

    const countNumber = {};

    for (const number of array) {
        const value = Math.floor(number);

        countNumber[value] ??= 0;

        if (countNumber[value] === n) continue;

        countNumber[value]++;
        resultArray.push(value);
    }

    return resultArray;
}

const array = [1, 2, 3, 1, 2, 1, 2, 3];
const n = 2;

const result = limitOccurrences(array, n);
console.log(result);
