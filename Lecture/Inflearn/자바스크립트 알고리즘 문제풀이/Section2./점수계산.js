function solution(arr){
    let answer = 0;
    let weight = 0;
    for(const x of arr){
        if(x === 1) weight++;
        else weight = 0;

        answer+= weight;
    }


    return answer;
}

const arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

console.log(solution(arr));