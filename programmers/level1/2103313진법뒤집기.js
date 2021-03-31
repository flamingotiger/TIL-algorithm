/*
 * 코딩테스트 연습 > 월간 코드 챌린지 시즌1 > 3진법 뒤집기
 * https://programmers.co.kr/learn/courses/30/lessons/68935?language=javascript
 * Level1
 */

function solution(n) {
    var base10 = [];
    var base3 = [];
    var isValue = true;

    while(isValue){
        base3.push(Math.floor(n % 3));
        n /= 3;  
        if(n < 1 && Math.floor(n % 3) === 0){
            isValue = false;
        }
    }

    var squareRoot = 1;
    for(var i = 0; i < base3.length; i++){
        var lenIdx = base3.length - 1;
        if(i !== 0) squareRoot *= 3;
        base10.push(base3[lenIdx - i] * squareRoot);
    }

    return base10.reduce((acc, cur) => acc + cur,0);
}

/* 다른 사람의 풀이 */
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}
