/*
 * 코딩테스트 연습 > 연습문제 > 같은 숫자는 싫어
 * https://programmers.co.kr/learn/courses/30/lessons/12906?language=javascript
 * Level1
 */
function solution(arr){
    return arr.reduce((acc,cur,i) => {
        arr[i + 1] !== cur && acc.push(cur)
        return acc;
    },[])
}