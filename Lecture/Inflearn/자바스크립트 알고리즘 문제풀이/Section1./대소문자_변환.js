function solution(s) {
    let answer = "";

    for (const a of s) {
        if (a === a.toUpperCase()) answer += a.toLowerCase();
        if (a === a.toLowerCase()) answer += a.toUpperCase();
    }

    return answer;
}

const input = "StuDY";

console.log(solution(input));
