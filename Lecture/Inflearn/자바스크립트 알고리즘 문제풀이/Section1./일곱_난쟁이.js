function solution(arr) {
    const sum = arr.reduce((prev, cur) => prev + cur);
    const answer = arr;
    for (let i = 0; i <= 7; i++) {
        for (let j = i + 1; j <= 8; j++) {
            if (sum - (answer[i] + answer[j]) == 100) {
                answer.splice(j, 1);
                answer.splice(i, 1);
                break;
            }
        }
    }
    return answer;
}

const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];

console.log(solution(arr));
