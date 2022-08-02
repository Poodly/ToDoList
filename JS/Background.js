// -<chageColors>- //

// -<Background>-------------------------------------------------------------------------------- //
const BackgroundColorChange = document.getElementById("inputBgColor") 
const BODY = document.querySelector(".body")
const BGCOLOR_KEY  = "BackgroundColor"; 

BackgroundColorChange.onchange = function(){  
    BODY.style.backgroundColor = this.value;  
    const inputBgColorValue = this.value;                  
    localStorage.setItem(BGCOLOR_KEY, inputBgColorValue); 
    console.log(this.value);  
}

const savedBgColor = localStorage.getItem(BGCOLOR_KEY); 

if (savedBgColor === null) {
    BODY.style.backgroundColor = "#ffffff";
} else {
    BODY.style.backgroundColor = savedBgColor;        
    document.querySelector("#inputBgColor").value = savedBgColor 
}

// -<Textcolor>-------------------------------------------------------------------------------- //

const TextColorChange = document.getElementById("inputTextcolor"); 
const NameInput       = document.querySelector(".nameInput")
const DelNameButton   = document.querySelector(".delName")
const TEXTCOLOR_KEY   = "textcolor"; 

TextColorChange.onchange = function(){ 
    BODY.style.color = this.value;  
    NameInput.style.color = this.value;
    DelNameButton.style.color = this.value;

    const inputTextColorValue = this.value;                 
    localStorage.setItem(TEXTCOLOR_KEY, inputTextColorValue); 

    console.log(this.value);  
}

const savedTextColor = localStorage.getItem(TEXTCOLOR_KEY); 

if (savedTextColor === null) {
    BODY.style.color = "#000";
    NameInput.style.color = "#000";
    DelNameButton.style.color = "#000";
} else {
    BODY.style.color = savedTextColor;         
    NameInput.style.color = savedTextColor;
    DelNameButton.style.color = savedTextColor;
    document.querySelector("#inputTextcolor").value = savedTextColor
    
}

// -<Boxcolor>------------------------------------------------------------------------------- //

const BoxColorChange = document.getElementById("inputBoxcolor") 
const toDoFormBoxColor = document.querySelector("#todo-form input")
const toDOListColor = document.querySelector("#todo-list")
const BOXCOLOR_KEY   = "boxcolor"; 

BoxColorChange.onchange = function(){  
    NameInput.style.backgroundColor = this.value;  
    toDoFormBoxColor.style.backgroundColor = this.value;
    toDOListColor.style.backgroundColor = this.value;

    const inputBocColorValue = this.value;                  
    localStorage.setItem(BOXCOLOR_KEY, inputBocColorValue);  

    console.log(this.value);  
}

const savedBoxColor = localStorage.getItem(BOXCOLOR_KEY); 

if (savedBoxColor === null) {
    NameInput.style.backgroundColor = "#90e3d4b6"; 
    toDoFormBoxColor.style.backgroundColor = "#90e3d4b6";
    toDOListColor.style.backgroundColor = "#90e3d4b6";
} else {
    NameInput.style.backgroundColor = savedBoxColor;         
    toDoFormBoxColor.style.backgroundColor = savedBoxColor;
    toDOListColor.style.backgroundColor = savedBoxColor;
    BoxColorChange.value = savedBoxColor
}