/*
 * 코딩테스트 연습 > 2021 KAKAO BLIND RECRUITMENT > 신규 아이디 추천
 * https://programmers.co.kr/learn/courses/30/lessons/72410
 * Level1
 */
function solution(new_id) {   
    function firstStep(){
        new_id = new_id.toLowerCase();
    }
    function secondStep(){
        new_id = new_id.replace(/[^a-z0-9_..-]/g, '');
    }
    function thirdStep(){
        new_id = new_id.replace(/\.+/g, '.');
    }
    function fourthStep(){
        new_id = new_id.replace(/^\.|\.$/g, '');
    }
    function fifthStep(){
        if(!new_id){
            new_id = 'a';
        }
    }
    function sixthStep(){
        if(new_id.length > 15){
            new_id = new_id.substr(0,15);
            new_id = new_id.replace(/\.$/,'');
        }
    }
    function seventhStep(){
        if(new_id.length <= 2){
            var text = new_id.match(/.$/);
            for(var i = new_id.length; i < 3; i++){
                new_id+=text;    
            }
        }
    }
    firstStep();
    secondStep();
    thirdStep();
    fourthStep();
    fifthStep();
    sixthStep();
    seventhStep();
    return new_id;
}