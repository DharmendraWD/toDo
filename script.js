let inputBox = document.querySelector("#inputBox");
let bttn = document.querySelector("#bttn");
let allLists = document.querySelector(".allLists");
let showErrP = document.querySelector(".showErr p");


function hideErr(){
    showErrP.parentElement.style.opacity=0;
}

let del ='';
let click =1;  //
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
        let _noteValue = document.createElement("p");
        _noteValue =inputBox.value;

        var content = `<div class="paraWithIcon">
        <p>${click}: ${_noteValue}</p>
        <div class="rightIcon">
         <img src="images/del.png" alt="" class="del">
         <img src="images/done.png" alt="" id="done">
    </div>
    </div>`
    click ++;
        allLists.insertAdjacentHTML('beforeend', content)
    inputBox.value=""  //Clears the previous value from Box
     del = document.querySelectorAll('.del');

     del.forEach(function(elem, ind){
        elem.addEventListener('click', function(){
            console.log('cl');
            
        })
     })
}
})


