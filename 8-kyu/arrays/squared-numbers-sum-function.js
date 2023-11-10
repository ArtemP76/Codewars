/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.
*/
function squareSum(numbers){
    let total = 0;
    for (let i = 0; i < numbers.length; i++){ //создаем цикл
        let  num = numbers[i]; // перебираем элементы массива
        total = Math.pow(num, 2) + total;
    }
    return total;
}