function solution(m, arr){
    let answer = 0;
    const len = arr.length;
    arr.sort((a, b)=>(a[0]+a[1])-(b[0]+b[1]));

    for(let i = 0; i < len; i++){
        let cnt = 1; 
        let sum = m - (arr[i][0] / 2) + arr[i][1];
        for(let j = 0; j < len; j++){
            if(i !== j && arr[j][0] + arr[j][1] > sum) break;
            if(i !== j && arr[j][0] + arr[j][1] <= sum){
                sum -= arr[j][0] + arr[j][1];
                cnt++;
            }
        }
        answer = Math.max(answer, cnt);
    }
    return answer;

}

const M = 28;
const arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];

console.log(solution(M, arr));