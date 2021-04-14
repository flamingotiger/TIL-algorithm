/*
 * 코딩테스트 연습 > 연습문제 > 수박수박수박수박수박수?
 * https://programmers.co.kr/learn/courses/30/lessons/12922?language=javascript
 * Level1
 */
function solution(n) {
  let i = 0;
  let text = '';
  while(i < n){
      if(i % 2){
          text += "박"
      }else { 
          text += "수"
      }
      i++
  }
  return text;
}
/* 다른 사람의 풀이 */
function waterMelon(n){
    // n을 2로나눈 몫 만큼 곱하고 나머지가 있으면 '수' 더해라.
    return ("수박").repeat(n/2) + ((n%2) ? '수' : '');
  }