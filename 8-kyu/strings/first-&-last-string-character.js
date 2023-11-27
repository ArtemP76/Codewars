/*Напишите JS функцию isSameStartAndEnd, которая принимает строку и
возвращает true, если строка начинается и заканчивается на один же символ.
Не учитывайте пробелы в начале и конце строки. Не чувствительна к регистру.*/

function isSameStartAndEnd(string) {
    const trim = string.trim();
    const lowerString = trim.toLowerCase();
    return lowerString[0] === lowerString[lowerString.length - 1];
}