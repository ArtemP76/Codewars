function findLastIndexOf(string, substring) {
    const lowerCaseString = string.toLowerCase();
    const lowerCaseSubstring = substring.toLowerCase();
    const lastIndex = lowerCaseString.lastIndexOf(lowerCaseSubstring);
    return lastIndex;
}
/* Как для новичка в JavaScript напишите функцию findLastindexOf ,
которая принимает два параметра: строку и подстроку.
Функция должна возвращать индекс последнего вхождения подстроки в строку.
Если подстрока не найдена, функция должна возвращать -1.
Поиск должен быть нечувствителен к регистру.
*/