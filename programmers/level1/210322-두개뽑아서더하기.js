/*
 * https://programmers.co.kr/learn/courses/30/lessons/68644
 * 코딩테스트 연습 > 월간 코드 챌린지 시즌1 > 두 개 뽑아서 더하기
 * Level1
 */
function solution(numbers) {
  var answer = [];
  var len = numbers.length;
  var n = len - 1;
  var i = 0;
  var j = 1;

  while (i < n) {
    var sum;
    var current = numbers[i];
    var next = numbers[j];
    sum = current + next;

    if (!answer.includes(sum)) {
      answer.push(sum);
    }

    if (j < len) {
      j++;
    }

    if (j === len) {
      i++;
      j = i + 1;
    }
  }
  var sortAnswer = answer.sort((a, b) => a - b);
  return sortAnswer;
}
