/*
Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.

Examples:

['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
 */

function flickSwitch(arr){
    let basket = [];
    let condition = true;
    for (let i = 0; i < arr.length; i++){

        if (arr[i] === 'flick'){
            condition = !condition;
        }
        basket.push(condition)
    }
    return basket;
}
