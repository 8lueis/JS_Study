// css 스타일 제어 
const box = document.getElementById('box');
// box.style.backgroundColor = 'red';
// box.style.color = '#fff';
// box.style.width = '100px';
// box.style.height = '100px';
// box.style.marginLeft = '30px';
// box.style['margin-left] = '30px';
// box.style.border = '15px solid #000'

// css 클래스 제어
// box.className = 'bg-red';
// box.className = 'bg-blue';
// box.className = 'bg-blue txt-pink';

// classList
box.classList.add('txt-white');
// DOMTokenList(3) ['box', 'bg-red', 'txt-white', value: 'box bg-red txt-white']
box.classList.remove('txt-white');
// DOMTokenList(2) ['box', 'bg-red', value: 'box bg-red']
box.classList.add('bg-green','txt-pink');
box.classList.replace('bg-red','bg-blue'); // 디폴트로 줬던 bg-red를 bg-blue로 교체


// setInterval : 함수 실행 간격을 실행한다 
setInterval(()=>{
    box.classList.toggle('bg-red');
}, 1000)
// 1000 -> 1초

// li 태그 클릭 시 색상 변경
const color = document.getElementById('color');

color.onclick = function(e){
    const target = e.target;
    //teg name이 li가 아니면 return
    if(target.tagName != 'LI') return;

    target.classList.toggle('txt-pink');
}


