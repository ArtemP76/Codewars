function take(arr, n) {
    // return arr.slice(0, n);
    let firstNElements = []

    for (let i = 0; i < n && i < arr.length; i++) {
        firstNElements.push(arr[i]);
    }

    return firstNElements;

}

// Create a function that accepts a list/array and a number n, and returns a list/array of the first
// n elements from the list/array.