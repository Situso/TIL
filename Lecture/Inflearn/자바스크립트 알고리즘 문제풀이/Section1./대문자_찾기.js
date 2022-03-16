function solution(s){
    let answer = 0;

    for(const x of s){
        const a =  x.charCodeAt();
        if(a >= 65 && a <= 90) answer++;
    }

    return answer;
}

const input = "KoreaTimeGood"

console.log(solution(input));