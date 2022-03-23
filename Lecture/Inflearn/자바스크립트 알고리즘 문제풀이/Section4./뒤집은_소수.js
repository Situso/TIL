function isPrimeNum(x) {
    if (x === 1) return 0;
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) return 0;
    }

    return 1;
}

function solution(arr) {
    const answer = [];

    for (let x of arr) {
        let rev = 0;
        while (x) {
            let t = x % 10;
            rev = rev * 10 + t; // *
            x = Math.floor(x / 10);
        }

        if (isPrimeNum(rev)) answer.push(rev);
    }

    return answer;
}

const arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];

console.log(solution(arr));
