const scriptURL = 'https://script.google.com/macros/s/AKfycbyf90hsrCZTi1lCn-sPacib_cLKdDEi8OPHEXHVNcJshoBWhNJf106EPnp_Zsbg2Lc5hQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response =>document.getElementById("demo").innerHTML = "Message Sended!")
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})