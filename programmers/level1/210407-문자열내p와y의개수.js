/*
 * 코딩테스트 연습 > 연습문제 > 문자열 내 p와 y의 개수
 * https://programmers.co.kr/learn/courses/30/lessons/12916?language=javascript
 * Level1
 */
function solution(s){
    const p = s.match(/p/gi) || [];
    const y = s.match(/y/gi) || [];
    return p.length === y.length;
}