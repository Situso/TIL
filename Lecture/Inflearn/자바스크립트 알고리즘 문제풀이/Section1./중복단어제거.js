function solution(s) {
    const mS = new Set(s);
    let answer = [];
    for (let a of mS) answer.push(a);

    return answer.join("\n");
}

const input = ["good", "time", "good", "time", "student"];

console.log(solution(input));
