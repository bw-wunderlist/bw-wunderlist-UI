let navA=document.querySelector('.headerbtn');
navA.addEventListener('mouseover',(event)=>{
    event.target.style.color='#ffa500';
    event.target.style.background='#0e0b2a';
    
});


navA.addEventListener('mouseout',(event)=>{
    event.target.style.color='#0e0b2a';
    event.target.style.background='#ffa500';
    
});


