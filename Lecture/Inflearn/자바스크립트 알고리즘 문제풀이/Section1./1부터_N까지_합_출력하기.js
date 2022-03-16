function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) answer += i;

    return answer;
}

function solution(n) {
    function sum(n) {
        if (n === 1) return 1;
        else return sum(n - 1) + n;
    }

    return sum(n);
}

// const N = 6;
const N = 10;

console.log(solution(N));
