/*
 * 코딩테스트 연습 > 해시 > 완주하지 못한 선수
 * https://programmers.co.kr/learn/courses/30/lessons/42576
 * Level1
 */
function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (var i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
