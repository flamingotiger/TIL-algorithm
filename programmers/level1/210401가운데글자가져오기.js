/*
 * 코딩테스트 연습 > 연습문제 > 가운데 글자 가져오기
 * https://programmers.co.kr/learn/courses/30/lessons/12903?language=javascript
 * Level1
 */
function solution(s) {
    var answer = s.length % 2 === 0 ? s.substr(s.length / 2 - 1, 2) : s.substr(s.length / 2, 1);
    return answer;
}