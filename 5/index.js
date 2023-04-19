// Selectors
const checkBtn=document.querySelector('button');
const input=document.querySelector('input');
const resultField=document.querySelector('p');

checkBtn.addEventListener('click',showResult);

function showResult(){
    if(palindromeCheck(input.value.toUpperCase())){
        resultField.innerHTML=`${input.value.toUpperCase()} is a palindrome.`;
    }
    else{
        resultField.innerHTML=`${input.value.toUpperCase()} is NOT a palindrome.`;
    }
}

function palindromeCheck(s){
    // let s="jai";
    let n=s.length;
    for(let i=0;i<parseInt(n/2);i++){
        if(s.charAt(i)!==s.charAt(n-i-1)){
            return false;
        }
        
    }
    return true;
}
