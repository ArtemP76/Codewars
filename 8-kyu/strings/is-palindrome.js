function isPalindrome(string) {
    let lowerString = string.toLowerCase() // переводим строку в нижний регистр
    let reversedString = ''; // создаем пустую строку,, в которую перебирая переведенную
    // в нижний регистр строку складываем перевернутую циклом строку
    for (let i = lowerString.length - 1; i >= 0; i--)
        reversedString += lowerString[i]

    if (lowerString === reversedString) { //сравниваем обе строки
        return true
    } else {
        return false
    }

}