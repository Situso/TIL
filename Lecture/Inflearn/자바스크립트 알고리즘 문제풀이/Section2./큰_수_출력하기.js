function solution(arr) {
    let prev = 0;
    let answer = [];
    for (const x of arr) {
        if (x > prev) answer.push(x);
        prev = x;
    }

    return answer;
}

const arr = [7, 3, 9, 5, 6, 12];

console.log(solution(arr));
