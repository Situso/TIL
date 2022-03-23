function solution(arr) {
    const N = arr[0].length;
    const M = arr.length;

    let answer = 0;

    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 4; j++) {
            let cnt = 0;
            for (let k = 0; k < M; k++) {
                let pi = (pj = 0);
                for (let s = 0; s < N; s++) {
                    if (arr[k][s] === i) pi = s;
                    if (arr[k][s] === j) pj = s;
                }
                if (pi < pj) cnt++;
            }
            if (cnt === M) answer++;
        }
    }

    return answer;
}
const arr = [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
];

console.log(solution(arr));
