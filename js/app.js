

//variables

//cached elems
const toggleBtn = document.getElementById('toggleBtn')
const body = document.querySelector('body')
const gitHub = document.getElementById('git')
const linkedIn = document.getElementById('linked')
const email = document.getElementById('gMail')

//event listeners

toggleBtn.addEventListener('click', toggleDark)

gitHub.addEventListener('mouseover', function () {
  gitHub.classList.add('animate__animated', 'animate__jello', 'animate__repeat-3')
})

gitHub.addEventListener('animationend',() => {
gitHub.classList.remove('animate__animated', 'animate__jello')
})


linkedIn.addEventListener('mouseover', function () {
  linkedIn.classList.add('animate__animated', 'animate__jello', 'animate__repeat-3')
})

linkedIn.addEventListener('animationend',() => {
  linkedIn.classList.remove('animate__animated', 'animate__jello')
})


email.addEventListener('mouseover', function () {
  email.classList.add('animate__animated', 'animate__jello', 'animate__repeat-3')
})

email.addEventListener('animationend',() => {
  email.classList.remove('animate__animated', 'animate__jello')
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

