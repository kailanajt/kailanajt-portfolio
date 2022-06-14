//variables

//cached elems
const toggleBtn = document.getElementById('toggleBtn')
const body = document.querySelector('body')
//event listeners
toggleBtn.addEventListener('click', toggleDark)

//functions

function toggleDark() {
    body.className = body.className === "dark" ? "" : "dark"
  }

  function checkDarkPref() {
    if (
      window.matchMedia("(prefers-color-scheme:dark)").matches &&
      body.className !== "dark"
    ) {
      toggleDark()
    }
  }

checkDarkPref()

function confetti () {
    confetti.start (2000)
}

