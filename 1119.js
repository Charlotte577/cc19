const content = document.querySelector(".content");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.addEventListener('mouseenter', () => {
  content.classList.add('hover-left');
})

left.addEventListener('mouseleave', () => {
  content.classList.remove('hover-left');
})

left.addEventListener("click",()=>{
	content.classList.add('click-left');
})


right.addEventListener('mouseenter', () => {
  content.classList.add('hover-right');
})

right.addEventListener('mouseleave', () => {
  content.classList.remove('hover-right');

})


right.addEventListener("click",()=>{
	content.classList.add('click-right');
})

left.addEventListener("click")