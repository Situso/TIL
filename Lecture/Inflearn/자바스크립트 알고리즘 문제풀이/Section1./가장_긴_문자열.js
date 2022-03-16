function solution(arr) {
    let max = -1;
    let answer;
    for (const x of arr) {
        if (x.length > max){
            max = x.length;
            answer = x;
        }
    } 

    return answer;    
}

const input = ["teacher", "time", "student", "beautiful", "good"];

console.log(solution(input));
