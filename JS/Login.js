/// -<Login>- ///
const loginForm    = document.querySelector("#login-form");
const loginInput   = document.querySelector("#login-form input");
const greeting     = document.querySelector(".greeting")
// ------------------------------------------------------------------------------------------------------------------
const clock2       = document.querySelector(".clock");       
const date2        = document.querySelector(".date");        
const weathers     = document.querySelector(".header span:nth-child(1)");  
const city         = document.querySelector(".header span:nth-child(2)");  
const HClock1      = document.querySelector(".Hclock");      
const quoteAuthor  = document.querySelector(".quoteAuthor"); 
const onToDoForm   = document.getElementById("todo-form");   
const onToDoList   = document.getElementById("todo-list");   
const DelBox       = document.querySelector(".delName")
// ------------------------------------------------------------------------------------------------------------------
const HIDDEN_CLASS  = "hidden";                      
const OPACITY2      = "opacity2"; 
const OPACITYREVERS = "opacityRevers"; 
const ZEROOPACITY   = "zeroOpacity"; 
const TODOHIDDEN    = "ToDoHidden";

const USERNAME_KEY  = "username";                 

// function ---------------------------------------------------------------------------------------------------------
function onLoginSubmit(event) {
   event.preventDefault();                       
   
   loginForm.classList.add(OPACITY2);
   setTimeout(function(){loginForm.classList.add(HIDDEN_CLASS)}, 500); 

   clock2.classList.add(OPACITY2);                //시계도 사라지게
   setTimeout(function(){clock2.classList.add(HIDDEN_CLASS)}, 500); 

   date2.classList.add(OPACITY2);                 //날짜 요일도 사라지게
   setTimeout(function(){date2.classList.add(HIDDEN_CLASS)}, 500);
//---------------------------------------------------------------------------   
   weathers.classList.add(OPACITYREVERS);         //날씨, 온도 나타나게
   setTimeout(function(){weathers.classList.remove(ZEROOPACITY)}, 1000);

   city.classList.add(OPACITYREVERS);             //도시 나타나게
   setTimeout(function(){city.classList.remove(ZEROOPACITY)}, 1000);

   HClock1.classList.add(OPACITYREVERS);          //header 시계 나타나게
   setTimeout(function(){HClock1.classList.remove(ZEROOPACITY)}, 1000);

   quoteAuthor.classList.add(OPACITYREVERS);       //명언 나타나게
   setTimeout(function(){quoteAuthor.classList.remove(ZEROOPACITY)}, 1000);

   greeting.classList.add(OPACITYREVERS);          //인사+ 이름 나타나게
   setTimeout(function(){greeting.classList.remove(ZEROOPACITY)}, 1000);

   onToDoForm.classList.add(OPACITYREVERS);         //ToDoForm 나타나게
   setTimeout(function(){onToDoForm.classList.remove(ZEROOPACITY)}, 1000);

   onToDoList.classList.add(OPACITYREVERS);         //List 나타나게
   setTimeout(function(){onToDoList.classList.remove(ZEROOPACITY)}, 1000);

   DelBox.classList.add(OPACITYREVERS);         //이름 삭제버튼 나타나게
   setTimeout(function(){weathers.classList.remove(ZEROOPACITY)}, 1000);

   const username = loginInput.value;             //loginInput.value; (입력에 따른 value값 불러오기)
   loginInput.innerText = "";
   localStorage.setItem(USERNAME_KEY, username);  //localStorage.setItem("key", value) -> value 값 저장하기.

   paintGreetings(username);
}

function paintGreetings(username){
   greeting.innerText = `Hello ${username}`;
   greeting.classList.remove(HIDDEN_CLASS);
}

// function ---------------------------------------------------------------------------------------------------------

loginForm.addEventListener("submit", onLoginSubmit); 

// ------------------------------------------------------------------------------------------------------------------
const savedUsername = localStorage.getItem(USERNAME_KEY); 

if (savedUsername === null) {
   loginForm.classList.remove(HIDDEN_CLASS);
   loginForm.addEventListener("submit", onLoginSubmit); 
} else {
   paintGreetings(savedUsername);                       
}

/// -<logout>- ///
const USERNAME_KEY2  = "username"; 
const DelButton   = document.querySelector(".delName")

function logoutClick() {
   localStorage.removeItem(USERNAME_KEY2);
 
   loginForm.classList.remove(OPACITY2);            //로그인창 나타나게
   setTimeout(function(){loginForm.classList.remove(HIDDEN_CLASS)}, 0); 

   clock2.classList.remove(OPACITY2);               //시계 나타나게
   setTimeout(function(){clock2.classList.remove(HIDDEN_CLASS)}, 0); 

   date2.classList.remove(OPACITY2);                //날짜 요일 나타나게
   setTimeout(function(){date2.classList.remove(HIDDEN_CLASS)}, 0);
//--------------------------------------------------------------------------- 

   weathers.classList.remove(OPACITYREVERS);        //날씨, 온도 사라지게
   setTimeout(function(){weathers.classList.add(ZEROOPACITY)}, 0);

   city.classList.remove(OPACITYREVERS);            //도시 사라지게
   setTimeout(function(){city.classList.add(ZEROOPACITY)}, 0);

   HClock1.classList.remove(OPACITYREVERS);         //header 시계 사라지게
   setTimeout(function(){HClock1.classList.add(ZEROOPACITY)}, 0);

   quoteAuthor.classList.remove(OPACITYREVERS);     //명언 사라지게
   setTimeout(function(){quoteAuthor.classList.add(ZEROOPACITY)}, 0);

   greeting.classList.remove(OPACITYREVERS);        //인사+ 이름 사라지게
   setTimeout(function(){greeting.classList.add(ZEROOPACITY)}, 0);

   onToDoForm.classList.remove(OPACITYREVERS);      //ToDoForm 사라지게
   setTimeout(function(){onToDoForm.classList.add(ZEROOPACITY)}, 0);

   onToDoList.classList.remove(OPACITYREVERS);      //List 사라지게
   setTimeout(function(){onToDoList.classList.add(ZEROOPACITY)}, 0);

   DelBox.classList.remove(OPACITYREVERS);          //이름 삭제버튼 사라지게
   setTimeout(function(){weathers.classList.add(ZEROOPACITY)}, 0);
}

DelButton.addEventListener("click", logoutClick);
   if(savedUsername != null) {
   //loginForm.classList.add(OPACITY2);             // 로그인창 사라지게
   setTimeout(function(){loginForm.classList.add(HIDDEN_CLASS)}, 0); 

   //clock2.classList.add(OPACITY2);                //시계도 사라지게
   setTimeout(function(){clock2.classList.add(HIDDEN_CLASS)}, 0); 

   //date2.classList.add(OPACITY2);                 //날짜 요일도 사라지게
   setTimeout(function(){date2.classList.add(HIDDEN_CLASS)}, 0);
   //---------------------------------------------------------------------------   
   weathers.classList.add(OPACITYREVERS);           //날씨, 온도 나타나게
   setTimeout(function(){weathers.classList.remove(ZEROOPACITY)}, 0);

   city.classList.add(OPACITYREVERS);               //도시 나타나게
   setTimeout(function(){city.classList.remove(ZEROOPACITY)}, 0);

   HClock1.classList.add(OPACITYREVERS);            //header 시계 나타나게
   setTimeout(function(){HClock1.classList.remove(ZEROOPACITY)}, 0);

   quoteAuthor.classList.add(OPACITYREVERS);        //명언 나타나게
   setTimeout(function(){quoteAuthor.classList.remove(ZEROOPACITY)}, 0);

   greeting.classList.add(OPACITYREVERS);           //인사+ 이름 나타나게
   setTimeout(function(){greeting.classList.remove(ZEROOPACITY)}, 0);

   onToDoForm.classList.add(OPACITYREVERS);         //ToDoForm 나타나게
   setTimeout(function(){onToDoForm.classList.remove(ZEROOPACITY)}, 0);

   onToDoList.classList.add(OPACITYREVERS);         //List 나타나게
   setTimeout(function(){onToDoList.classList.remove(ZEROOPACITY)}, 0);

   DelBox.classList.add(OPACITYREVERS);             //이름 삭제버튼 나타나게
   setTimeout(function(){weathers.classList.remove(ZEROOPACITY)}, 0);
}


