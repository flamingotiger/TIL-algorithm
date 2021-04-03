/*
 * 코딩테스트 연습 > 연습문제 > 나누어 떨어지는 숫자 배열
 * https://programmers.co.kr/learn/courses/30/lessons/12910?language=javascript#
 * Level1
 */
function solution(arr, divisor) {
    var answer = arr.filter(num => !(num % divisor)).sort((a,b) => a - b);
    return answer.length ? answer : [-1];
}