//편지
function solution(message) {

    var str = String(message);
    var len = str.length;
    var answer = len * 2
   
    if(answer <= 0 && answer <= 50){
        console.log(`${message}의 글자 수가 ${len}개로 최소 가로 ${answer}cm의 편지지가 필요합니다.`);
    }
    
    return answer;
}
