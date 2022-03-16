function solution(input) {
    const [d, ...arr] = input;
    let answer = 0;

    for (const x of arr) if (x % 10 === d) answer++;

    return answer;
}

// const input = [3, 25, 23, 11, 47, 53, 17, 33];
const input = [0, 12, 20, 54, 30, 87, 91, 30];

console.log(solution(input));
