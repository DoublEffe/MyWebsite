

function handler(mediaQuery,popoverList){
  if (mediaQuery.matches){
    console.log('poi')
    popoverList.map((popover) => popover.dispose())
    let span = document.querySelector('.trunc');
    span.removeAttribute('role')
    span.removeAttribute('data-bs-toggle')
    span.removeAttribute('data-bs-content')
    popoverList.map((popover) => popover.disable())
    
}}

document.addEventListener('DOMContentLoaded', () => {
  let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  let popoverList = popoverTriggerList.map( (popoverTriggerEl) =>
   new bootstrap.Popover(popoverTriggerEl)
)
  //let mediaQuery = window.matchMedia('(min-width:426px)')

  //console.log(mediaQuery)
  //mediaQuery.addEventListener('change',handler)
  //handler(mediaQuery,popoverList)
  
})