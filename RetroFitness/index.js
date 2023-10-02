let home=document.getElementById('home')
let services=document.getElementById('services')
let trainner=document.getElementById('trainner')
let aboutus=document.getElementById('aboutus')

home.addEventListener('click',function()
{
    home.classList.add('active')
    services.classList.remove('active')
    trainner.classList.remove('active')
    aboutus.classList.remove('active')
})
services.addEventListener('click',function()
{
    home.classList.remove('active')
    services.classList.add('active')
    trainner.classList.remove('active')
    aboutus.classList.remove('active')
})
trainner.addEventListener('click',function()
{
    home.classList.remove('active')
    services.classList.remove('active')
    trainner.classList.add('active')
    aboutus.classList.remove('active')
})
aboutus.addEventListener('click',function()
{
    home.classList.remove('active')
    services.classList.remove('active')
    trainner.classList.remove('active')
    aboutus.classList.add('active')
})

let hamburgerid=document.getElementById('hamburgerid')
let z=document.getElementById('lowerNavContainer2UlID')
let x=document.getElementById('x')
// let y=document.getElementsByClassName('lowerNavContainer2UlID')

hamburgerid.addEventListener('click',function(){
    z.classList.toggle('toggleNav')
    
})

let firstIdx=0
function autoSlide()
{
    setTimeout(autoSlide,3000)
    var pics;
    const img=document.querySelectorAll('.image')
    for(pics=0;pics<img.length;pics++)
    {
        img[pics].style.display="none";
    }
    firstIdx++;
    if(firstIdx>img.length)
    {
        firstIdx=1;

    }
    img[firstIdx-1].style.display="block";
}
autoSlide();

let workout=document.getElementById("work")
let nextButton=document.getElementById("nextButton")
let backButton=document.getElementById("backButton")

workout.addEventListener("wheel",(eve)=>{
    eve.preventDefault();
    workout.scrollLeft +=eve.deltaY
})
nextButton.addEventListener("click",()=>{
    workout.scrollLeft +=600;
})
backButton.addEventListener("click",()=>{
    workout.scrollLeft -=600;
})

let nutrient=document.getElementById("diet")
let nextButtonnutrient=document.getElementById("nextButtonnutrient")
let backButtonnutrient=document.getElementById("backButtonnutrient")

nutrient.addEventListener("wheel",(eve)=>{
    eve.preventDefault();
    nutrient.scrollLeft +=eve.deltaY
})
nextButtonnutrient.addEventListener("click",()=>{
    nutrient.scrollLeft +=600;
})
backButtonnutrient.addEventListener("click",()=>{
    nutrient.scrollLeft -=600;
})