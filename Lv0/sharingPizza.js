//피자 나눠 먹기
function solution(n) {
    var answer = 0;
    
    if(n>7){
        answer = Math.ceil(n/7);
    }else if(n<7){
        answer = 1;
    }else{
        answer = 1;
    }
    
    return answer;
}