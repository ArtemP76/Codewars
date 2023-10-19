function digitize(n) {
    let numbers = n.toString().split("").reverse();
    let digitalArray = []
    for (let i = 0; i < numbers.length; i++){
        let currentNumber = numbers[i] * 1
        digitalArray.push(currentNumber)
    };
    return digitalArray;
}

/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]

*/