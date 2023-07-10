//피자 나눠 먹기
function s1(n){
    return Math.ceil(n / 7);
}
//인원수 / 피자 일곱 조각의 몫을
//무조건 소수점 버리고 올리는 함수 Math.ceil 사용 



//공배수
function s2(number, n, m){
    return (number%n === 0) ? (number%m === 0) ? 1 : 0 : 0;
}

//number%n===0이 참이면 number%m===0으로 이동
//거짓이면 바로 0 출력 why? n과 m의 공통 배수가 아니기 때문
//이동한 number%m===0이 참이면 1 출력 why? 두 조건 모두 충족
//거짓인 경우 0 출력 



//개미군단
function s3(hp){
    return Math.floor(hp/5) + Math.floor((hp%5)/3) + (hp%5)%3;
}

//Math.floor : 소수점 이하를 버림 
//Math.floor(hp/5) 장군 개미가 감소시킨 hp 크기 
//Math.floor((hp%5)/3) 장군 개미가 감소시키고 남은 hp를 병정 개미가 감소시킨 hp크기
//(hp%5)%3 병정 개미가 감소시키고 남은 hp 크기
//(일군 개미의 데미지가 1이기 때문에 남은 나머지 값과 동일)


//외계행성의 나이
function s4(age){
    return age.toString().split('').map((v) => "abcdefghij" [v]).join('');
}

//age.toString -> 문자열로 변환
//.split() 구분자 삭제
//.map -> 주어진 값에 오름차순으로 접근해 callback fn을 통해 새로운 값을 새로운 배열로 반환
//.map([v] => "abcdefghij"[v]) 
//[v]로 각 요소를 받아온 후 "문자욜"[인덱스]형태로 해당하는 문자 새로운 배열 생성
//.join으로 생성된 배열을 다시 문자열로 변환 


//369게임
function s5(order){
    return (''+order).split(/[369]/).length-1;
}

//''+order 빈 문자열과 order 연결
//  /[]/ -> 기준이 되는 요소
//.split(/[369]/) -> /[369]/이 나오면 배열의 요소로 포함됨 
//369가 담긴 배열의 길이 -1을 해 주면 369가 나온 횟수 return