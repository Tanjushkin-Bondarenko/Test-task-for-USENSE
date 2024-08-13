const passwordInput = document.forms[0].password
const easy = document.querySelector("#easy");
const medium = document.querySelector("#medium");
const strong = document.querySelector("#strong");
const showReliabilityPass = document.querySelector("#showReliabilityPass")
passwordInput.addEventListener("input", ()=> {
    const enterData = passwordInput.value
    const okLength = passwordInput.value.length > 7
    const letters = /\D/
    const digit = /\d/
   const symbol = /\W/ 

   
 
if(letters.test(enterData) && !digit.test(enterData) && !symbol.test(enterData)&& okLength){
   
    easy.style.display ="inline-block";
    strong.style.display = "none";
    medium.style.display  = "none";
showReliabilityPass.style. backgroundColor = "lightgray";
   }else if (digit.test(enterData)  && !letters.test(enterData) && !symbol.test(enterData) && okLength){
    easy.style.display ="inline-block";
    strong.style.display = "none";
    medium.style.display  = "none";
    showReliabilityPass.style. backgroundColor = "lightgray";
}else if (symbol.test(enterData)  && !digit.test(enterData) && !letters.test(enterData) && okLength){
        easy.style.display ="inline-block";
        strong.style.display = "none";
        medium.style.display  = "none";
        showReliabilityPass.style. backgroundColor = "lightgray";
}else if(digit.test(enterData) && symbol.test(enterData)&& !letters.test(enterData) && okLength){
    easy.style.display = "none";
    medium.style.display = "inline-block";
    strong.style.display = "none";
    showReliabilityPass.style. backgroundColor = "lightgray";
   }else if(digit.test(enterData) && letters.test(enterData) && !symbol.test(enterData) && okLength){
    easy.style.display = "none";
    medium.style.display = "inline-block";
    strong.style.display = "none";
    showReliabilityPass.style. backgroundColor = "lightgray";
}else if(letters.test(enterData) && symbol.test(enterData)&& !digit.test(enterData) && okLength){
    easy.style.display = "none";
    medium.style.display = "inline-block";
    strong.style.display = "none";
    showReliabilityPass.style. backgroundColor = "lightgray";
   }else if(letters.test(enterData)&& symbol.test(enterData) && digit.test(enterData) && okLength){
    easy.style.display = "none";
    medium.style.display = "none";
    strong.style.display = "inline-block";
    showReliabilityPass.style. backgroundColor = "lightgray";
   }else if(passwordInput.value.length == 0){
    easy.style.display ="none";
    showReliabilityPass.style. backgroundColor = "lightgray";
    strong.style.display = "none";
    medium.style.display  = "none";
   }else if (passwordInput.value.length>0 && passwordInput.value.length<7){
    showReliabilityPass.style. backgroundColor = "red";
   }else{
    showReliabilityPass.style. backgroundColor = "lightgray";
    easy.style.display ="inline-block";
    strong.style.display = "none";
    medium.style.display  = "none";
   }
  
})