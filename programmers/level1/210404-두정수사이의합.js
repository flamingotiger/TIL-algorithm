/*
 * 코딩테스트 연습 > 연습문제 > 두 정수 사이의 합
 * https://programmers.co.kr/learn/courses/30/lessons/12912
 * Level1
 */
function solution(a, b) {
    let answer = 0;
    let [start, end] = [a, b].sort((prev,next) => prev - next);
    while(start <= end){
        answer += start;
        start++;
    }
    return answer;
}