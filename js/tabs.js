// tabs


class TabLink {
    constructor(tabElement){
     
      this.tabElement=tabElement;
      
      
      this.tabData=this.tabElement.dataset.tab;
      
     
      if(this.tabData==='all'){
       
        this.cards =document.querySelectorAll('.card') ;
      } else {
     
        this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);
      }
      
      
      this.cards=Array.from(this.cards).map(a=>
        new TabCard(a));
      
      
      this.tabElement.addEventListener('click',(event=>{
        this.selectTab(event)
  
      }));
  
      
    }
    selectTab(){
     
    const tabs=document.querySelectorAll('.tab');
      
    tabs.forEach(a=>a.classList.remove('active-tab'));
  
    const cards=document.querySelectorAll('.card');
  
    cards.forEach(a=>a.style.display='none');
      
    this.tabElement.classList.add('active-tab')
      
    this.cards.forEach(card => card.selectCard());
    }
  }
  class TabCard {
    constructor(cardElement){

      this.cardElement=cardElement;
  
    }
    selectCard(){
     
      this.cardElement.style.display='flex';
    }
  }

  
let tabs = document.querySelectorAll('.tab');
tabs.forEach(tab=>{
  return new TabLink(tab);
})
 
 