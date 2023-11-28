function past(h, m, s) {
    // Convert hours to seconds, minutes to seconds, and add seconds
    let totalSeconds = h * 3600 + m * 60 + s;

    // Convert total seconds to milliseconds
    let totalMilliseconds = totalSeconds * 1000;

    return totalMilliseconds;
}
// function past(h, m, s){
//   return ((h*3600)+(m*60)+s)*1000;
// }
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.