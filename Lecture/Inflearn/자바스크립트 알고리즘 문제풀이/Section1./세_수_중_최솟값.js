function solution(a, b, c) {
    let answer;
    if (a < b) answer = a;
    else answer = b;
    if (c < answer) answer = c;

    return answer;
}

const arr = [6, 5, 11];

console.log(solution(...arr));