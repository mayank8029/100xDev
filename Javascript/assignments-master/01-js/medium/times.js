/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let sum = 0 ; 
    
    let ans = 0 ; 
    // console.log(ms)
    let current = new Date() ;
    let ms = current.getMilliseconds();
    for(let i = 0 ; i < n ; i++){
        sum = sum + i ; 
    }
    let now = new Date() ; 
    now = now.getMilliseconds() ; 
    // console.log(now) ;
    ans = now-ms; 
    console.log(ans) ; 
}

calculateTime(100) ;
calculateTime(1000) ; 
calculateTime(10000) ;