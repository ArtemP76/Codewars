function sumArray(array) {
    let sum = 0
    if (array === undefined || array === null || array.length < 3){
        return 0;
    }
    let max = array[0]; //объяв макс. переменную
    let min = array[0];

    for (let i = 0; i < array.length; i++){
        sum = sum + array[i];
        if (array[i] > max) { //сравниваем тек значение с максимальным и мин.
            max = +array [i]
        }
        if (array[i] < min) {
            min = +array [i]
        }
    }
    return sum - max - min;
}
   /*
   Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
*/