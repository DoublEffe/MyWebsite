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
  const template_params = {'from_name': name.ariaValueMax, 'message': body.value}
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    emailjs.sendForm('service_gxjtpqf', 'template_faf6qip', form)
                    .then(() => {
                      clear()
                        console.log('SUCCESS!');
                    }, (error) => {
                        clear()
                        console.log('FAILED...', error);
                    });
  })
})