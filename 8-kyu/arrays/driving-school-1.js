function passed (list) {
    let totalGrade = 0; // переменная для суммы оценок
    let numberSt = 0;  // переменная для кол-ва студентов
    for (let i = 0; i <= list.length; i++){ // цикл для перебора студентов
        if (list[i] <= 18) { // с оценкой не выше 18
            numberSt = numberSt + 1;  // число таких студентов
            totalGrade = totalGrade + list[i]; // их общая оценка
        }
    }
    if (numberSt === 0) { // проверить, если такие студенты есть вообще
        return 'No pass scores registered.'
    }
    return Math.round (totalGrade / numberSt);
}
/*Every month, a random number of students take the driving test at Fast & Furious (F&F) Driving School. To pass the test, a student cannot accumulate more than 18 demerit points.

At the end of the month, F&F wants to calculate the average demerit points accumulated by ONLY the students who have passed, rounded to the nearest integer.

    Write a function which would allow them to do so. If no students passed the test that month, return 'No pass scores registered.'.


    Example:

[10,10,10,18,20,20] --> 12
*/