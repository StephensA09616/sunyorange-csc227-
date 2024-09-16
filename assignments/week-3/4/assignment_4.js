/*
*Exercise 2
*Write a function "max3" that returns the largest of its three arguments
*/
x = 1
y = 10
z = 3

function max3(x, y, z) {
    if ((x > y) && (x > z)) {
        return (x);
    } else if ((y > z) && (y > x)) {
        return (y);
    } else {
        return (z);
    }
}


/*
*Exercise 5
*Write a function that takes a positive integer N and than calculates and displays
*the sum of the first N odd integers.
*/
/* Help */
let N = 5;

function sumOfOddIntergers(N) {
    let sum = 0;
    for (let i = 0; i < N; i++) {
        sum += 2 * i +1;
    }
    return sum;
}






/*
*Exercise 9
*Rewrite the "countdown" function padge 96 so that it uses a while loop instead of
*a for loop.
*/
const start = 10

/*Countdown using if statement.
*function countdown(start) {
*    for (let t = start; t >= 0; t--) {
*        console.log(t);
*    }
*}
*/

/*Countdown using while statement.*/
function countdownUsingWhile(start) {
    while (start >= 0) {
        console.log(start)
        start -= 1;
    }
}