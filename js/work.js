import {projects} from '../js/projects.js'
// console.log(myProjects)

let projectsHTMLArr = projects.map(project => {
	const html = `
    <h3 id='title'>${project.title}</h3>
    <div class="project" id="ttt">
    <img src=${project.image} height= 170px width=170px id ='image'>
    <p id='desc'>${project.description}</p>
    <a href='${project.deployment}' id='deploy' class='links'>Play Here!</a>
    <a href='${project.github}' id='github' class='links'>Github<a>
    </div>

    <h3 id='title'>${project.title}</h3>
    <div class="project" id="scribble-inn">
    <img src=${project.image} height= 170px width=170px id ='image'>
    <p id='desc'>${project.description}</p>
    <a href='${project.deployment}' id='deploy' class='links'>Click Here!</a>
    <a href='${project.github}' id='github' class='links'>Github<a>
    </div>
  `
	return html
})

const projectsHTMLString = projectsHTMLArr.join('')
const div = document.getElementById('projects')
div.innerHTML = projectsHTMLString



