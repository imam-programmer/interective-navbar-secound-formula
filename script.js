let one=document.querySelector('#one');
let two=document.querySelector('#two');
let about=document.querySelector('#about');
let service=document.querySelector('#service');
one.addEventListener('click',()=>{
    about.style.display='block'
     service.style.display='none'
})
two.addEventListener('click',()=>{
    service.style.display='block';
    
    about.style.display='none'
})
let sections=document.querySelectorAll('section');
sections.forEach((section)=>{
    section.addEventListener('click',()=>{
        section.style.display='none'
    })
})