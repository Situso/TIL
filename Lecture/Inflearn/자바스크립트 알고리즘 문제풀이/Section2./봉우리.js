function solution(arr) {
    let answer = 0;
    const dx = [0, 1, 0, -1];
    const dy = [-1, 0, 1, 0];
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let flag = 1;
            for (let k = 0; k < 4; k++) {
                const nx = i + dx[k];
                const ny = j + dy[k];

                if (
                    nx >= 0 &&
                    nx <= n - 1 &&
                    ny >= 0 &&
                    ny <= n - 1 &&
                    arr[nx][ny] >= arr[i][j]
                ) {
                    flag = 0;
                    break;
                }
            }
            if (flag) answer++;
        }
    }

    return answer;
}

const arr = [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
];

console.log(solution(arr));
