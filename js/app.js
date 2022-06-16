

//variables

//cached elems
const toggleBtn = document.getElementById('toggleBtn')
const body = document.querySelector('body')
const gitHub = document.getElementById('git')
const linkedIn = document.getElementById('linked')
const email = document.getElementById('gMail')

// gitHub.classList.add('animate__animated', 'animate__jello')
// linkedIn.classList.add('animate__animated', 'animate__jello')
// email.classList.add('animate__animated', 'animate__jello')


//event listeners
toggleBtn.addEventListener('click', toggleDark)

gitHub.addEventListener('mouseover', function () {
  gitHub.classList.add('animate__animated', 'animate__jello', 'animate__repeat-3')
  // gitHub.style.setProperty('--animate-duration', '1.0')
  gitHub.classList.remove()
  
})

linkedIn.addEventListener('mouseover', function () {
  linkedIn.classList.add('animate__animated', 'animate__jello', 'animate__repeat-3')
  // gitHub.style.setProperty('--animate-duration', '1.0')
  linkedIn.classList.remove()
  
})

email.addEventListener('mouseover', function () {
  email.classList.add('animate__animated', 'animate__jello', 'animate__repeat-3')
  // gitHub.style.setProperty('--animate-duration', '1.0')
  email.classList.remove()
  
})

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

