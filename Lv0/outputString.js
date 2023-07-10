//외계 행성의 나이 
function solution(age) {
    var answer = '';
    var arr = Array.from(String(age));

    var eng = 'abcdefghij'
    
    for(i=0; i<arr.length; i++){
        answer += eng.charAt(arr[i]);
    }
    
    console.log(answer);
    return answer;
}

solution(23);