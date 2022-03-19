function solution(s, t) {
    let cnt = 0;
    let answer = [];
    for (const x of s) {
        if (x === t) cnt = 0;
        else cnt++;
        answer.push(cnt);
    }
    cnt = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === t) cnt = 0;
        else {
            cnt++;
            answer[i] = Math.min(answer[i], cnt);
        }
    }

    return answer;
}

const s = "teachermode";
const t = "e";

console.log(solution(s, t));
// 1 0 1 2 1 0 1 2 2 1 0
