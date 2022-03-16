function solution(line, s){
    let answer = line.split(s).length -1 ;

    return answer;

}

const input = "COMPUTERPROGRAMMING";

console.log(solution(input, "R"));