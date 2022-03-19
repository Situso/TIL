function solution(input) {
    let answer = "";

    for (const x of input) {
        if (!Number.isNaN(+x)) answer += x;
    }

    return +answer;
}

const input = "g0en2T0s8eSoft";

console.log(solution(input));
