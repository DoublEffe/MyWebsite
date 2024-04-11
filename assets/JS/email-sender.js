emailjs.init({
  publicKey: 'TpIVwMO7SiQVIonIc',
})

document.addEventListener('DOMContentLoaded',() =>{
  const form = document.getElementById('email-sender')
  const email= document.getElementById('email')
  const name= document.getElementById('name')
  const body= document.getElementById('body')
  function clear () {
    email.value = ''
    name.value = ''
    body.value = ''
  }
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(email.value.match(/^(\w)+@(\D)+\.\D{2,3}$/g))
    if (email.value.match(/^(\w)+@(\D)+\.\D{2,3}$/g) && name.value.match(/\D/g) ) {
      console.log('pp')
      emailjs.sendForm('service_gxjtpqf', 'template_faf6qip', form)
                      .then(() => {
                        clear()
                        window.alert('Message sended')
                      }, (error) => {
                          clear()
                          console.log(error)
                          window.alert('Error occurred')
                      });
    }
    else{
      window.alert('incorrect email')
      clear()
    }
  })
})