const inp = document.querySelector('input')
const ulElement = document.getElementById('todo-list')
const btnElement = document.getElementById('submit-button')

btnElement.addEventListener('click',function(){
  if(inp.value !== ''){
    const li = document.createElement('li')
    li.textContent = inp.value
    inp.value = ''
    ulElement.appendChild(li)
  } 
})
