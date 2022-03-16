function solution(arr) {
    let answer = [];
    let min = Number.MAX_SAFE_INTEGER;
    let sum = 0;

    for (const x of arr) {
        if (x % 2 === 1) {
            if (min > x) min = x;
            sum += x;
        }
    }

    answer.push(sum, min);

    return answer.join("\n");
}

const arr = [12, 77, 38, 41, 53, 92, 85];

console.log(solution(arr));
