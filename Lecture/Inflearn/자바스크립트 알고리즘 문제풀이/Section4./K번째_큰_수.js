function solution(k, arr) {
    let answer;
    const len = arr.length;
    const tmp = new Set();
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = j + 1; k < len; k++) {
                tmp.add(arr[i] + arr[j] + arr[k]);
            }
        }
    }

    answer = Array.from(tmp).sort((a, b) => b - a)[k - 1];
    return answer;
}

const K = 3;
const arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

console.log(solution(K, arr));
