/*
 * 코딩테스트 연습 > 연습문제 > 소수 찾기
 * https://programmers.co.kr/learn/courses/30/lessons/12921?language=javascript
 * Level1
 */
function solution(n) {
  const s = new Set();
  for(let i=1; i<=n; i+=2){
      s.add(i);
  }
  s.delete(1);
  s.add(2);
  for(let j=3; j<Math.sqrt(n); j++){
      if(s.has(j)){
           for(let k=j*2; k<=n; k+=j){    
              s.delete(k);
           }
      }
  }
  return s.size;
}