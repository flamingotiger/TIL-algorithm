/*
 * 코딩테스트 연습 > 정렬 > K번째수
 * https://programmers.co.kr/learn/courses/30/lessons/42840?language=javascript
 * Level1
 */
function solution(array, commands) {
    const solutionArray = [];
    commands.forEach((command) => {
        const i = command[0] - 1;
        const j = command[1];
        const k = command[2] - 1;
        const slice_array = array.slice(i,j); // 1
        const slice_array_sort = slice_array.sort((a,b) => a - b);
        solutionArray.push(slice_array_sort[k])  
    })
    return solutionArray;
}