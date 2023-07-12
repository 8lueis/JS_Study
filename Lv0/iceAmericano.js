//아이스 아메리카노
function solution(money) {
    var answer = [];
    
    var americano = 5500;
    
    var cash = parseInt(money % americano);
    
    var coffee = parseInt(money / americano);
    
    var answer = [coffee, cash];
    
    console.log(`${money}원은 아이스 아메리카노 ${coffee}잔을 
    살 수 있고 잔돈은 ${cash}원입니다.`);
    
    return answer;
}