/*
#4 QuickSum
Вычисление контрольной суммы для строки
1.  Если строка содержит строчные буквы, спецсимволы или пробелы
    в начале или конце → возвращается 0
2.  Если строка содержит один сивол - возвращается его
    позиция в исходной таблице.
3.  Во всех остальных случаях для каждого символа строки его
    позиция в исходной таблице умножается на порядковый номер
    в строке и возврашается сумма этих значений

Исходная таблица
    const symbols = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
*/

const symbols = " ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const str = "MID";

function quickSum(symbols, string) {
    let sum = 0;
    const regExp = /^[A-Z ]+$/;
    if (!regExp.test(string) || string.trim() !== string) {
        return 0;
    }
    if (string.length === 1) {
        return symbols.indexOf(string);
    }
    for (let i = 0; i < string.length; i++) {
        sum += symbols.indexOf(string[i]) * (i + 1);
    }
    return sum;
}

const result = quickSum(symbols, str);
console.log(result);
