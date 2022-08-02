// -<ToDo_List>- //--------------------------------------------------------------------------------------------------
const toDoForm  = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector ("input");     
const toDoList  = document.getElementById("todo-list"); 


const TODOS_KEY = "todos";
const EMOJI_KEY = "emoji";
let   toDos     = [];     
let   emoji     = [];

// function ---------------------------------------------------------------------------------------------------------
function saveToDos() {                                    
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}    

function savsEmoji() {
    localStorage.setItem(EMOJI_KEY, JSON.stringify(emoji))
}

function deleteToDo(event) {
    const li = event.target.parentElement; 
    console.log(li)
    li.innerText = `😢`;                
    li.classList.add("opacity");
    setTimeout(function(){li.remove()}, 700);     
    
    toDos = toDos.filter((item) => item.id !== parseInt(li.id));     
    saveToDos()
}   

function piantToDo(inputToDo) {
    const maketoDoLi   = document.createElement("li");  
    const maketoDoSpan = document.createElement("span");   
    const maketButton  = document.createElement("button");
    const maketButton2 = document.createElement("button");

    maketoDoLi.id      = inputToDo.id         
    maketButton.innerText  = "×";
    maketButton2.innerText = "😐";
    maketoDoSpan.classList.add("complet");
    maketButton2.classList.add("eimozComplet");
    maketoDoSpan.innerText = `${inputToDo.text}`;  
    toDoList.  appendChild(maketoDoLi);
    maketoDoLi.appendChild(maketButton2);
    maketoDoLi.appendChild(maketoDoSpan);
    maketoDoLi.appendChild(maketButton);
    //document.querySelector('.eimozComplet').id = 'undefined';
    maketButton.addEventListener("click", deleteToDo);

// completed //
    const completeds = document.querySelectorAll(".complet");
    
    for(var i=0; i<completeds.length; i++){
        completeds[i].onclick = function Aa(){           
            this.classList.toggle('completedOpacity');
        }
    }

    function changeButton(event){
        //const Aa  = event.target.classList.value;
        const Aaa = event.target.id;
        //console.log(Aa);
        console.log(Aaa);
        const SSs = `#${Aaa}"`
        const Bb  = document.getElementById(SSs);
        console.log(Bb);

        if (maketButton2.innerHTML === "😀") {
            maketButton2.innerHTML = "😐";

            maketButton2.id = 

            localStorage.setItem(EMOJI_KEY, JSON.stringify(emoji))
            
        } else {
            maketButton2.innerHTML = "😀";
            const NowEmoji   = document.querySelector(".eimozComplet").innerText;
            let EimjiObject1 = {text:NowEmoji, id:Date.now(),};
            //console.log(EimjiObject1);
            emoji.push(EimjiObject1);

            maketButton2.id = EimjiObject1.id

            localStorage.setItem(EMOJI_KEY, JSON.stringify(emoji))
            
        }
    }
    
    const EimojiButton = document.querySelector(".eimozComplet"); 
    function AAAAa(event){
        event.preventDefault();
        const Aa = event.target.id;
        console.log(Aa);
        if(Aa = undefined){
            maketButton2.innerHTML = "😀";
        }
}
    maketButton2.addEventListener("submit", AAAAa);
    maketButton2.addEventListener("click", changeButton);

}


///////////////////////////////////////////////////
function hanleToDoSubmit(event) {
    event.preventDefault();
    const inputToDo   = toDoInput.value;
    toDoInput.value   = "";  
    const makeToDoObj = {    
        text: inputToDo,     
        id: Date.now(),      
    };
    toDos.push(makeToDoObj); 
    
    piantToDo(makeToDoObj);
    saveToDos();             
}

// function ---------------------------------------------------------------------------------------------------------

toDoForm.addEventListener("submit", hanleToDoSubmit); // enter이벤트 발생 -> "submit" 작용 -> function 실행 

// ------------------------------------------------------------------------------------------------------------------

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); 
    toDos = parsedToDos;             
    parsedToDos.forEach(piantToDo);  
}  





