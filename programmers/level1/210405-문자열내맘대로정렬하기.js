/*
 * 코딩테스트 연습 > 연습문제 > 문자열 내 마음대로 정렬하기
 * https://programmers.co.kr/learn/courses/30/lessons/12915?language=javascript
 * Level1
 */
function solution(strings, n) {
  var answer = strings.sort((a, b) => {
    const prev = a.toUpperCase();
    const next = b.toUpperCase();
    let stringA = prev[n].toUpperCase();
    let stringB = next[n].toUpperCase();
    if (stringA === stringB) {
      if (prev < next) {
        return -1;
      }
      if (prev > next) {
        return 1;
      }
      return 0;
    }
    if (stringA < stringB) {
      return -1;
    }
    if (stringA > stringB) {
      return 1;
    }
    return 0;
  });
  return answer;
}

/* 다른 사람의 풀이 */
function solution(strings, n) {
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}