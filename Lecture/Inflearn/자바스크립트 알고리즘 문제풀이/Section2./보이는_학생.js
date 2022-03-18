function solution(arr) {
    let answer = 0;
    let cur = 0;
    for (const x of arr) {
        if (x > cur) {
            answer++;
            cur = x;
        }
    }

    return answer;
}

const arr = [130, 135, 148, 140, 145, 150, 150, 153];

console.log(solution(arr));
