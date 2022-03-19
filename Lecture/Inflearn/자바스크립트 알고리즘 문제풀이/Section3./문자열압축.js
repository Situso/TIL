function solution(input) {
    input = input + "";
    let answer = "";
    let cnt = 1;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i + 1]) cnt++;
        else {
            answer += input[i];
            if (cnt > 1) answer += cnt;
            cnt = 1;
        }
    }
    return answer;
}

const input = "KKHSSSSSSSE";

console.log(solution(input));
// K2HS7E
