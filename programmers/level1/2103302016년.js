/*
 * 코딩테스트 연습 > 연습문제 > 2016년
 * https://programmers.co.kr/learn/courses/30/lessons/12901
 * Level1
 */
function solution(a, b) {
    var date = new Date(`2016-${a}-${b}`);
    var week = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    return week[date.getDay()];
}