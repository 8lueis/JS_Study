//머쓱이보다 키 큰 사람
function solution(array, height) {
    var answer = 0;
    for(i=0; i<array.length; i++){
        if(array[i]>height){    
            answer++;
        }
    }
     return answer;
}
