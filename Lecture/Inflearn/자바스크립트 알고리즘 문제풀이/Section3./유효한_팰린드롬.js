function solution(input) {
    let answer = "YES";
    input = input.toUpperCase();
    let palindrome = input.replace(/[^A-Z]/g, "");

    const len = palindrome.length;
    for (let i = 0; i < len; i++) {
        if (palindrome[i] !== palindrome[len - i - 1]) return "NO";
    }

    return answer;
}

const input = "found7, time: study; Yduts; emit, 7Dnuof";

console.log(solution(input));
