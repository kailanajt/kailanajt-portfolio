

//variables

//cached elems
const toggleBtn = document.getElementById('toggleBtn')
const body = document.querySelector('body')
const gitHub = document.getElementById('git')
const linkedIn = document.getElementById('linked')
const email = document.getElementById('gMail')

gitHub.classList.add('animate__animated', 'animate__jello')
linkedIn.classList.add('animate__animated', 'animate__jello')
email.classList.add('animate__animated', 'animate__jello')


//event listeners
toggleBtn.addEventListener('click', toggleDark)
// gitHub.addEventListener('mouseover', () => {
//   gitHub.classList.add('animate__animated', 'animate__jello')
//   gitHub.style.setProperty('--animate-duration', '0.5s')
//   gitHub.classList.remove('animate__animated', 'animate__jello')
  
// })

//functions

function toggleDark() {
  body.className = body.className === "dark" ? "" : "dark"
}

function checkDarkPref() {
  if (window.matchMedia("(prefers-color-scheme:dark)").matches && body.className !== "dark") {
    toggleDark()
  }
}

checkDarkPref()

