#!/usr/bin/env node

function factorial(n){
    if ( n < 1 ) throw new Error("n must be greater than 0");
    if ( n === 1 ) return n;

    return n * factorial(n-1);
}

var n = 1;

while ( n <= 10 ) {
    console.log("%d! = %d", n, factorial(n));
    n++;
}
