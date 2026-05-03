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
    if (!animals) {
        return [];
    }
    const sortedAnimals = [...animals];

    return sortedAnimals.sort((a, b) => {
        if (a.legsNumber === b.legsNumber) {
            return a.name.localeCompare(b.name, "us");
        }
        return b.legsNumber - a.legsNumber;
    });
}

const result = sortAnimals(animals);
console.log(result);