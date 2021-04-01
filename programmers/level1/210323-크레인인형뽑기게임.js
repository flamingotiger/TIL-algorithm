/*
 * 코딩테스트 연습 > 2019 카카오 개발자 겨울 인턴십 > 크레인 인형뽑기 게임
 * https://programmers.co.kr/learn/courses/30/lessons/64061
 * Level1
 */
function solution(board, moves) {
  var basket = [];
  var count = 0;
  for(const move of moves){
      var moveIndex = move - 1;
      
      for(var j = 0; j < board.length; j++){
          var boardRow = board[j];
          var selectItem = boardRow[moveIndex];
          
          if(selectItem > 0){
              if(basket[basket.length - 1] === selectItem){
                  basket.pop();
                  count+=2;
              } else {
                  basket.push(selectItem);
              }
              board[j][moveIndex] = 0;
              
              break;
          }
      }
  }
  return count;
}