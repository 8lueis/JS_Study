//양꼬치
function solution(n, k) {
    var answer = 0;

    var sale = parseInt(n / 10);
    var answer = (n * 12000) + (k * 2000) - (sale * 2000)
    if(n>10){
        console.log(`${n}인분을 시켜 서비스로 음료수를 받아 총
         ${n} * 12000 + ${k} * 2000 - ${sale} * 2000 = ${answer}원입니다. `);
    }
    
    console.log(`총 ${answer}원입니다.`);
    return answer;
}