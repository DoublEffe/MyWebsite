
function handler (){
  document.getElementById('workflow').scrollIntoView( {behavior: "smooth"})
}

document.addEventListener('DOMContentLoaded', () => {
  let button = document.querySelector('button')
  button.addEventListener('click',handler)              
})