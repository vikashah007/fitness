let title=document.getElementById('title')
let inputName=document.getElementById('inputName')
let signIn=document.getElementById('signIn')
let signUp=document.getElementById('signUp')

signIn.addEventListener('click', function(){
    title.innerHTML="Sign In";
    inputName.style.maxHeight="0"
    signUp.classList.add('disable')
    signIn.classList.remove('disable')
})
signUp.addEventListener('click', function(){
    title.innerHTML="Sign Up";
    inputName.style.maxHeight="65px"
    signIn.classList.add('disable')
    signUp.classList.remove('disable')
  
})