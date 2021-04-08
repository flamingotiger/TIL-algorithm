/*
 * 코딩테스트 연습 > 연습문제 > 문자열 내림차순으로 배치하기
 * https://programmers.co.kr/learn/courses/30/lessons/12917
 * Level1
 */
function solution(s) {
  const answer = s
    .split("")
    .sort((a, b) => b.charCodeAt() - a.charCodeAt())
    .join("");
  return answer;
}
/* 다른 사람의 풀이 */
function solution(s) {
  return s.split("").sort().reverse().join("");
}
