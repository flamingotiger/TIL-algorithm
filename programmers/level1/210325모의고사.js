/*
 * 코딩테스트 연습 > 완전탐색 > 모의고사
 * https://programmers.co.kr/learn/courses/30/lessons/42840?language=javascript
 * Level1
 */
function solution(answers) {
  var result = [];
  var counts = [
      { id: 1, count: 0 },
      { id: 2, count: 0 },
      { id: 3, count: 0 }
  ];
  var pattern = [
      [1,2,3,4,5],
      [2,1,2,3,2,4,2,5],
      [3,3,1,1,2,2,4,4,5,5]
  ];
  for(var i = 0; i < answers.length; i++){
      for(var j = 0; j < pattern.length; j++){
          var overIndex = i;
          if(overIndex >= pattern[j].length){
              overIndex %= pattern[j].length;
          }
          if(answers[i] === pattern[j][overIndex]){
              counts[j].count += 1;
          }
      }
  }
  var max = Math.max(...counts.map(c => c.count));
  var result = counts.filter(c => c.count === max).map(c => c.id);
  return result;
}