//개미 군단
function solution(hp) {

    var answer = 0;


    var plus = parseInt(hp/5);
    var count = parseInt(hp%5);

    var plus3 = parseInt(count/3);
    var count2 = parseInt(count%3);

    var plus1 = parseInt(count2/1);

    answer = plus + plus3 + plus1;

    console.log(answer);
    return answer;
}

solution(999);