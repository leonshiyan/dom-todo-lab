const inp = document.querySelector('input')
const ulElement = document.getElementById('todo-list')
const submitBtnElement = document.getElementById('submit-button')

submitBtnElement.addEventListener('click',function(){
  if(inp.value !== ''){
    const li = document.createElement('li')
    li.textContent = inp.value
    inp.value = ''
    ulElement.appendChild(li)
  } 
})

const resetBtnElement = document.getElementById('reset-button')

resetBtnElement.addEventListener('click',function(){
  inp.value = null
  document.querySelector('ul').innerHTML=''
})

ulElement.addEventListener('click',function(evt){
  //console.log(evt)
  evt.target.remove()
})

