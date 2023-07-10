//369
function solution(order) {
    var answer = 0;

    var str = order.toString();
    for(i=0; i<str.length; i++){
        if(str[i]=='3' || str[i]=='6' || str[i]=='9'){
            answer = answer +  1;
        }
    }
    
    console.log(answer);
    return answer;
}

solution(123456789)