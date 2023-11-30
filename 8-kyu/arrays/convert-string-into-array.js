/*Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]
*/

function stringToArray(string){


    let array = [];
    let word = '';
    let separator = ' '; //создаем переменную со значением разделителя в строке, в нашем случае - пробела
    for (let i = 0; i < string.length; i++){ //loop the string
        if (string[i] !== separator){ //проверяем не равен ли символ в строке пробелу
            word = word + string[i] //добавляем к строке следующий символ

        } else { //в противном сслучае (когда встречается separator мы добавляем подстроку в массив)
            array.push(word)
            word = '' // очищаем переменную для новой после пробела подстроки
        }
    }
    array.push(word) // это крайний случай для послднего элемента строки, после которого нет пробела
    return array;

}

//return string.split(" ")