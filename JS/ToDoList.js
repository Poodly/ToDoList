// -<ToDo_List>- //--------------------------------------------------------------------------------------------------
const toDoForm  = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector ("input");     
const toDoList  = document.getElementById("todo-list"); 

const TODOS_KEY = "todos";
let   toDos      = [];

// function ---------------------------------------------------------------------------------------------------------
function init() {
    toDoForm.addEventListener("submit", hanleToDoSubmit); // enter이벤트 발생 -> "submit" 작용 -> function 실행 

    // localStorage 불러오기 + 렌더링
    const savedToDos = localStorage.getItem(TODOS_KEY);
    if(savedToDos !== null) {
        const parsedToDos = JSON.parse(savedToDos); 
        toDos = parsedToDos;             
        parsedToDos.forEach(paintTodo);  
    } 
}

function saveToDos() {                                    
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}     

function paintTodo(inputToDo) {
    const maketoDoLi   = document.createElement("li");  
    const maketoDoSpan = document.createElement("span");   
    const deleteButton = document.createElement("button");
    const emojiButton  = document.createElement("button");
    if(inputToDo.isDone) maketoDoSpan.classList.add("completedOpacity"); //현재 toDo의 isDone 체크 
    maketoDoLi.id      = inputToDo.id         
    deleteButton.innerText = "×";
    emojiButton.innerText  = inputToDo.emoji;
    emojiButton.classList.add("eimozComplet");
    maketoDoSpan.innerText = `${inputToDo.text}`;  
    toDoList.  appendChild(maketoDoLi);
    maketoDoLi.appendChild(emojiButton);
    maketoDoLi.appendChild(maketoDoSpan);
    maketoDoLi.appendChild(deleteButton);

    //deleteButton event
    deleteButton.addEventListener("click", (event) => {
        const li = event.target.parentElement; 
        console.log(li)
        li.innerText = `😢`;                
        li.classList.add("opacity");
        setTimeout(function(){li.remove()}, 700);     
        toDos = toDos.filter((item) => item.id !== parseInt(li.id)); 

        saveToDos()
    });

    //text Click event
    maketoDoSpan.onclick = () => {
        maketoDoSpan.classList.toggle('completedOpacity')
        toDos = toDos.map((item) => {
            if(parseInt(maketoDoLi.id) === item.id){
             return {
                    text: item.text,
                    emoji: item.emoji,
                    isDone : !item.isDone,
                    id: item.id,
             }
            }else return item;
         })
         saveToDos();
    }
    
    // emoji Click event
    emojiButton.addEventListener("click", (event) => {
        let NowEmoji;
        if (emojiButton.innerText === "😀") {
            NowEmoji = "😐";
        } else {
            NowEmoji = "😀";
        }
        emojiButton.innerText = NowEmoji;
        const li = event.target.parentElement;
        toDos = toDos.map((item) => {
            if(item.id === parseInt(li.id)){
                return {
                    text: item.text,
                    emoji: NowEmoji,
                    isDone : item.isDone,
                    id: item.id, 
                }
            } else return item;
        })
        saveToDos();
    });
}

function hanleToDoSubmit(event) {
    event.preventDefault();
    const inputToDo   = toDoInput.value;
    toDoInput.value   = "";  
    const makeToDoObj = {    
        text: inputToDo,
        emoji: '😐',
        isDone : false,
        id: Date.now(),     
    };
    toDos.push(makeToDoObj); 
    paintTodo(makeToDoObj);
    saveToDos();             
}


init();

