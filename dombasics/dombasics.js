const newParagraph = document.createElement('p')
newParagraph.innerText = 'This is the JS paragraph'
document.body.appendChild(newParagraph)
const image = document.createElement('img')
image.setAttribute('src', 'https://placeimg.com/200/200/animals')
document.body.appendChild(image)
const newSection = document.createElement('section')
newSection.innerHTML = '<h2>CSE121B</h2><p>Welcome to Javascript language</p>'
document.body.appendChild(newSection)