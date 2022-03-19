function solution(input) {
    input = input.toUpperCase();
    const len = input.length;
    let answer = "YES";

    for (let i = 0; i < len; i++) {
        if (input[i] != input[len - i - 1]) return "NO";
    }

    return answer;
}

const input = "gooG";

console.log(solution(input));
