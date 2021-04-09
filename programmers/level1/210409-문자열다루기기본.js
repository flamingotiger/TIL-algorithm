/*
 * 코딩테스트 연습 > 연습문제 > 문자열 다루기 기본
 * https://programmers.co.kr/learn/courses/30/lessons/12918?language=javascript
 * Level1
 */
function solution(s) {
  const length = s.length === 4 || s.length === 6;
  const regex = /[a-z]/gi.test(s);
  return length && !regex;
}

/* 다른 사람의 풀이 */
function alpha_string46(s){
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}
