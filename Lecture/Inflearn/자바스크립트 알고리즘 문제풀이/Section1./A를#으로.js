function solution(sentence){
    let answer = "";

    for(const x of sentence){
        if(x === "A") answer+= "#";
        else answer+=x;
    }

    // const answer = sentence.replace(/A/g, "#");
    
    return answer;    
}

const input = "BANANA";

console.log(solution(input));