//각도기
function solution(angle){
    var answer = 0;
    
    if(0<angle && angle<90){
        var answer = 1;
        console.log(`angle이 ${angle}이므로 예각입니다. 따라서 ${answer}을 return합니다. `);
    }else if(angle==90){
        var answer = 2;
        console.log(`angle이 ${angle}이므로 예각입니다. 따라서 ${answer}을 return합니다. `);
    }else if(90<angle && angle<180){
        var answer = 3;
        console.log(`angle이 ${angle}이므로 예각입니다. 따라서 ${answer}을 return합니다. `);
    }else if(angle==180){
        var answer = 4;
        console.log(`angle이 ${angle}이므로 예각입니다. 따라서 ${answer}을 return합니다. `);
    }
    return answer;
}

solution(90)

