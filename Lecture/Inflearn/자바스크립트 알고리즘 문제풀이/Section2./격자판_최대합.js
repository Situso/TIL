function solution(arr) {
    const n = arr.length;
    let row = 0; // 행
    let column = 0; // 열
    let cross = 0;
    let reverse = 0;
    let answer = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            row += arr[i][j];
            column += arr[j][i];
        }
        cross += arr[i][i];
        reverse += arr[i][n - 1 - i];

        answer = Math.max(row, column);

        column = row = 0;
    }

    answer = Math.max(cross, reverse, answer);

    return answer;
}

const arr = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
];

console.log(solution(arr));
