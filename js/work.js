import {
	projects
} from '../js/projects.js'
// console.log(myProjects)

let projectsHTMLArr = projects.map(project => {
	const html = `
    <h3 id='title'>${project.title}</h3>
    <img src=${project.image} height= 170px width=170px id ='image'>
    <p id='desc'>${project.description}</p>
    <a href='${project.deployment}' id='deploy' class='links'>Play Here!</a>
    <a href='${project.github}' id='github' class='links'>See how I did it.<a>
  `
	return html
})

const projectsHTMLString = projectsHTMLArr.join('')
const div = document.getElementById('projects')
div.innerHTML = projectsHTMLString



