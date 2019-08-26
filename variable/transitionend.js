const div= document.querySelector('div')
div.addEventListener('click',e=>{
  e.currentTarget.classList.toggle('test')
})

div.addEventListener('transitionend',e=>{
  console.log(e);
  
  if (e.propertyName === 'border-left-color') {
    e.currentTarget.classList.toggle('test2')
  }
  
})