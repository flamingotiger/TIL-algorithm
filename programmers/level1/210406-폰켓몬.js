/*
 * 코딩테스트 연습 > 찾아라 프로그래밍 마에스터 > 폰켓몬
 * https://programmers.co.kr/learn/courses/30/lessons/1845?language=javascript
 * Level1
 */
function solution(nums) {
  const unique = [...new Set(nums)].length;
  const max = nums.length / 2;
  return unique > max ? max : unique;
}

/* 다른 사람의 풀이 */
function solution(nums) {    
    const len = nums.length;
    let stack = [], i = -1;
    while(++i < len){
        if (stack.indexOf(nums[i]) === -1){
            stack.push(nums[i]);
            if(stack.length === len/2) return len/2;
        } 
    }
    return stack.length;
}
