function solution(a, b, c){
    let answer = "YES";

    const total = a + b + c;
    let max = Math.max(a, b, c);
    if(total - max < max) answer = "NO";
    
    return answer;
}
// const arr = [6 ,7 ,11];
const arr = [13 ,33 ,17];

console.log(solution(...arr));