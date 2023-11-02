
let inputBox = document.querySelector("#inputBox");
let bttn = document.querySelector("#bttn");
let allLists = document.querySelector(".allLists");
let showErrP = document.querySelector(".showErr p");
let paraWithIcon = document.querySelector(".paraWithIcon");

function hideErr(){
    showErrP.parentElement.style.opacity=0;
}

let del ='';
let click =1;  //
let notes ='';
bttn.addEventListener('click', function(){
    if(inputBox.value==""){
        showErrP.parentElement.style.opacity=1;
        showErrP.innerHTML="Nothing to Add."
 showErrP.parentElement.style.background="rgb(248, 125, 125)"       
 setTimeout(hideErr, 2000)
}
else if(inputBox.value.length<=7){
    showErrP.parentElement.style.opacity=1;
        showErrP.parentElement.style.background="rgb(248, 125, 125)"       
        showErrP.innerHTML="Write more than 7 letters."
        setTimeout(hideErr, 2000)
    }
    else{
        let _noteValuePara = document.createElement("p");
        _noteValuePara.innerHTML=`${inputBox.value}`;

      paraWithIcon.append(_noteValuePara)   //Adding para 

    //   creating delete 'X' and bullet icon
      let span = document.createElement('span');
      let span2 = document.createElement('span');
       span2.innerHTML="\u25cf"
      span.innerHTML="\u00d7"
// Appending delete 'X' in right of para and bullet in the left 
      _noteValuePara.appendChild(span)
      _noteValuePara.appendChild(span2)
      inputBox.value=""
      saveData();   //called function to save data in browser

}
})

// What happens when click on delete or "X" icon 
var changer =1;
paraWithIcon.addEventListener('click', function(e){
    if(e.target.tagName=== "SPAN"){     //if clicked on "X" icon then delete the note
        e.target.parentElement.remove();
        saveData();   //called function to save data in browser
    }
    else if(e.target.tagName=== "P"){
    e.target.classList.toggle('checked') 
    e.target.backgroundColor='green'

    saveData();   //called function to save data in browser
    }   
})

// Save data in browser
function saveData() {
    localStorage.setItem("data", paraWithIcon.innerHTML);
}
function showData(){
    paraWithIcon.innerHTML = localStorage.getItem("data");
}
showData();

// Text Running effect in box 
const texts = ["Hey, Wash School Bag", "Clean the Floor", "Make a ToDO Web app"];
let currentTextIndex  = 0;
let currentCharIndex = 0;

function updatePlaceholder() {
    const currentText = texts[currentTextIndex];
    const placeholder = currentText.substring(0, currentCharIndex);
    inputBox.placeholder = placeholder;

    if (currentCharIndex < currentText.length) {
        currentCharIndex++;
    } else {
        currentCharIndex = 0;
        currentTextIndex = (currentTextIndex + 1) % texts.length;
    }
}
setInterval(updatePlaceholder, 120)