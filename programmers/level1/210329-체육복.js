/*
 * 코딩테스트 연습 > 탐욕법(Greedy) > 체육복
 * https://programmers.co.kr/learn/courses/30/lessons/42862?language=javascript
 * Level1
 */
function solution(n, lost, reserve) {
    var answer = 0;
    var studients = new Array(n).fill(1);
    for(var i = 0; i < lost.length; i++){
        var index = lost[i] - 1;
        studients[index] -= 1;
    }
    
    for(var j = 0; j < reserve.length; j++){
        var index = reserve[j] - 1;
        studients[index] += 1;
    }
    
    for(var k = 0; k < n; k++){
        if(studients[k] === 2){
            var prevStudient = studients[k - 1];
            var nextStudient = studients[k + 1];
            
            if(prevStudient === 0){
                studients[k] -= 1;
                studients[k - 1] += 1;
                continue;
            }
            if(nextStudient === 0){
                studients[k] -= 1;
                studients[k + 1] += 1;
                continue;
            }
        }
    }
    
    for(var l = 0; l < n; l++){
        if(studients[l] >= 1){
            answer += 1;
        } 
    }
    return answer;
}