let pages=document.querySelectorAll(`.page`);
let navbarels=document.querySelectorAll(`.navbar-text`);
function elemInView(element){
  let rec=Math.floor(element.getBoundingClientRect().top);
  return (rec<200&&rec>=-200);
}
function toggleActive(){
  let i=0;
  for(const page of pages){
    i++;
    if(elemInView(page)){
        for(const el of navbarels){
            el.classList.remove('active');
        }
        let j=0;
        for(const el of navbarels){
          j++
          if(i==j){
            el.classList.add('active');
          }
        }
    }
  }
}
toggleActive();
document.addEventListener('scroll',function(){
  toggleActive();
});