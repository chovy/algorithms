#!/usr/bin/env node

function ack(m, n)
{
    var ans;

    if ( m < 0 || n < 0 ) {
        throw new Error("m and n must not be negative");
    }

    if ( m === 0 ) {
        ans = n + 1;
    } else if ( n === 0 ) {
        ans = ack(m - 1, 1)
    } else {
        ans = ack(m - 1, ack(m, n - 1));
    }

    return ans;
}

var ans = ack(3, 5);

console.log(ans);