/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

    Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"*/

function highAndLow(numbers){
    let array = numbers.split(' '); //преобраз строку в массив
    let max = +array[0]; //объяв макс. переменную с преобраз. строки в число
    let min = +array[0];
    for (let i = 0; i < array.length; i++){

        if (array[i] > max) { //сравниваем тек значение с максимальным и мин.
            max = +array [i]
        }
        if (array[i] < min) {
            min = +array [i]
        }

    } return max + ' ' + min;
}