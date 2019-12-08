let project = document.getElementById('project-button')
let projectList = document.getElementById('projects-list')

let project1 = '<li><a class = "links" href="https://github.com/vinhvinhvroom/voter_demographics" target="_blank">Voter Demographics Project</a><li><br>'

let projectText = (event) => {
  let projects = '<ul><li><a class="projects-links" href="https://github.com/vinhvinhvroom/voter_demographics" target="_blank">Voter Demographics Project</a></li><br><li><a class="projects-links" href="https://github.com/vinhvinhvroom/rock-paper-scissors" target="_blank">Rock, Paper, Scissors</a></li></ul>'
  projectList.innerHTML = projects
}

project.addEventListener('click', projectText)

let quotes = document.getElementById('quotes-button')
let quotesList = document.getElementById('quotes-list')

let quoteText = (event) =>{
  let quotesArray = ["<ul><li>'We are born of one breath, one word. We are all one spark, sun becoming'\n-Tool, 'Pneuma'</li></ul>", "<ul><li>'Because we separate, Like ripples on a blank shore, In rainbows'\n-Radiohead, 'Reckoner'</li></ul>", "<ul><li>'I wish I was a cat'\n-Thundercat, 'A Fan\'s Mail(Tron Song Suite II)'</li></ul>"]
  let index = Math.floor(Math.random() * quotesArray.length)
  let chosen = quotesArray[index]
  quotesList.innerHTML = chosen
}

quotes.addEventListener('click', quoteText)
