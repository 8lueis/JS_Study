//문자열 정수의 합
function solution(num_str) {
    
    var answer = 0;

    for(i=0; i<num_str.length; i++){
        answer = answer + parseInt(num_str[i])
    }
    console.log(answer);
    return answer;
}

solution("123456789")