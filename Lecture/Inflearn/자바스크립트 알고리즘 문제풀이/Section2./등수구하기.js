function solution(arr) {
    let answer = [];
    for (const a of arr) {
        let rank = arr.length;
        for (const b of arr) if (a > b) rank--;

        answer.push(rank);
    }

    // const n = arr.length;
    // let answer = Array.from({ length: n }, () => 1);

    // for (let i = 0; i < n; i++) {
    //     for (let j = 0; j < n; j++) {
    //         if (arr[j] > arr[i]) answer[i]++;
    //     }
    // }

    return answer;
}

const arr = [87, 89, 92, 100, 76];

console.log(solution(arr));
