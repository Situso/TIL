function solution(s){
    const mS = new Set(s);
    let answer = "";
    for(let a of mS) answer+= a;

    return answer;
}

const input = "ksekkset"

console.log(solution(input));