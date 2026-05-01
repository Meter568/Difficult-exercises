/*         
#2 Sort animals by legs numbers and names

Нужно написать функцию, которая принимает массив объектов типа Animal и возвращает новый массив. Новый
массив должен быть копией исходного массива, отсортированной сначала по количеству ног животного по
убыванию, а затем по имени животного.
Исходный массив не должен измениться

Пример массива с животными:

const animals = [
    {
        name: 'Cat',
        legsNumber: 4
    },
    {
        name: 'Dog',
        legsNumber: 4
    },
    {
        name: 'Eagle',
        legsNumber: 2
    },
    {
        name: 'Sparrow',
        legsNumber: 2
    },
    {
        name: 'Octopus',
        legsNumber: 8
    },
    {
        name: 'Centipede',
        legsNumber: 40
    },
    {
        name: 'Spider',
        legsNumber: 6
    },
]

Если в качестве аргумента передан пустой массив, программа должна вернуть пустой массив.
*/

"use strict";

const animals = [
    {
        name: "Dog",
        legsNumber: 4,
    },
    {
        name: "Cat",
        legsNumber: 4,
    },
    {
        name: "Sparrow",
        legsNumber: 2,
    },
    {
        name: "Eagle",
        legsNumber: 2,
    },
    {
        name: "Octopus",
        legsNumber: 8,
    },
    {
        name: "Centipede",
        legsNumber: 40,
    },
    {
        name: "Spider",
        legsNumber: 6,
    },
];

function sortAnimals(animals) {
    let sortedAnimals = [];
    let isSwapped;

    if (animals.length === 0) {
        return sortedAnimals;
    }

    sortedAnimals = [...animals];

    do {
        isSwapped = false;
        for (let i = 0; i < sortedAnimals.length - 1; i++) {
            if (sortedAnimals[i].legsNumber < sortedAnimals[i + 1].legsNumber) {
                [sortedAnimals[i], sortedAnimals[i + 1]] = [sortedAnimals[i + 1], sortedAnimals[i]];
                isSwapped = true;
            }
            if (sortedAnimals[i].legsNumber === sortedAnimals[i + 1].legsNumber) {
                if (sortedAnimals[i].name.toUpperCase() > sortedAnimals[i + 1].name.toUpperCase()) {
                    [sortedAnimals[i], sortedAnimals[i + 1]] = [sortedAnimals[i + 1], sortedAnimals[i]];
                    isSwapped = true;
                }
            }
        }
    } while (isSwapped);

    return sortedAnimals;
}

const result = sortAnimals(animals);
console.log(result);
