// 돔이 실행이 되면 함수를 실행시키겠다 
window.addEventListener('DOMContentLoaded', ()=>{
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');
    
    // submit 이벤트는 form 태그에서만 사용이 가능함 
    form.addEventListener('submit',(e)=>{
        // submit 동작에는 기본적으로 새로 고침이 포함
        // 초기화 -> preventDefault()로 이를 방지
        // 제출과 동시에 새로 고침이 되는 것을 방지하는 거라 보면 됨
        e.preventDefault();

        const task = input.value; // input 창에 적을 내용 (task 변수에 할당)


        // 만약 input 창에 아무것도 적지 않은 상태에서 '+' 버튼을 클릭할 경우
        if(!task){
            // 아래 알림창이 뜸
            alert('오늘의 할 일을 적어 주세요');
            return;
        }

        // input 창에 할 일을 적고 '+' 버튼을 클릭한 경우
        
        // 1차 작업 tasks
        const task_el = document.createElement('div');
        task_el.classList.add('task');
        // tasks가 id인 곳에 자식으로 들어가겠다
        list_el.appendChild(task_el);

        // 2차 작업 content
        const task_content_el = document.createElement('div');
        // contentf라는 클래스를 클래스 리스트에 부여하겠다
        task_content_el.classList.add('content');
        task_el.appendChild(task_content_el);

        //3, 4차 작업 - p tag를 2번 자식으로 넣겠다
        const circle = document.createElement('p');
        circle.innerText = '●';
        task_content_el.appendChild(circle);

        //5차 작업
        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly','readonly');
        task_content_el.appendChild(task_input_el);

        //3차 작업 
        const task_action_el = document.createElement('div');
        task_action_el.classList.add('action');
        task_el.appendChild(task_action_el);

        //6, 7 (3차에 넣는 작업)
        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerHTML = '편집';
        task_action_el.appendChild(task_edit_el);

        //7
        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerHTML = '삭제';
        task_action_el.appendChild(task_delete_el);


        // 여기까지 하면 html 삭제 가넝


        // 편집 가능하도록
        input.value = '';
        task_edit_el.addEventListener('click',()=>{
            if(task_edit_el.innerHTML == '편집'){
                // 읽기 전용 속성이 제거되면서 수정 가능하게 됨 
                task_input_el.removeAttribute('readonly');
                task_input_el.focus(); 
                task_edit_el.innerText = '완료';
            }
            else{
                // 완료가 됐을 시 다시 readonly 속성 부여 
                task_input_el.setAttribute('readonly');
                task_edit_el.innerText = '편집';
            }
        })

        // 삭제 가능하도록
        task_delete_el.addEventListener('click', ()=>{
            //삭제를 누르면 해당 리스트가 삭제가 됨
            list_el.removeChild(task_el);

        })

    })
})