#!/usr/bin/env node

function fib(n){
    var seq = [];

    function calc(n, a, b){
        if ( n > 0 ) {
            seq.push(a);
        }

        if ( n > 1 ) {
            calc(n - 1, b, a + b);
        }
    }

    calc(n, 0, 1);

    return seq;
}

console.log(fib(25));