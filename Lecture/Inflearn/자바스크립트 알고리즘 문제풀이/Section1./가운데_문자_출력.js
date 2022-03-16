function solution(s) {
    let answer;
    const len = s.length;
    const idx = Math.floor(len / 2);
    if (len % 2 === 0) answer = s.substring(idx - 1, idx + 1);
    else answer = s.substring(idx, idx + 1);

    return answer;
}

const input = "study";
// const input = "good";

console.log(solution(input));
