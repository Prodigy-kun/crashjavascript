let dictList = []
async function output() {
    const input = document.querySelector('#find').value.toLowerCase()
    const request = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
    if (request.ok) {
        dictList = await request.json()
        getWord(dictList)
    } else {
        const newDiv2 = document.createElement('div')
        newDiv2.setAttribute('class', 'response')
        document.body.appendChild(newDiv2)
        const newP1 = document.createElement('p')
        newP1.textContent = 'Your input is invalid, please enter a valid word'
        newDiv2.appendChild(newP1)
        const del2 = document.createElement('button')
        del2.setAttribute('class', 'delete2')
        del2.textContent = '❌clear'
        newDiv2.appendChild(del2)
        document.querySelector('.delete2').addEventListener('click', () => {
            document.body.removeChild(newDiv2)
        })
    }
}

function getWord(aList) {

    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'response')
    document.body.appendChild(newDiv)
    const newP1 = document.createElement('p')
    newP1.textContent = `Word: ${aList[0].word}`
    const newP2 = document.createElement('p')
    newP2.textContent = `Phonetics: ${aList[0].phonetics[0].text}`
    const newP3 = document.createElement('p')
    newP3.textContent = `Part of speech: ${aList[0].meanings[0].partOfSpeech}`
    const newP4 = document.createElement('p')
    newP4.textContent = `Definition: ${aList[0].meanings[0].definitions[0].definition}`
    const newP5 = document.createElement('p')
    newP5.textContent = `Synonyms: ${aList[0].meanings[0].definitions[0].synonyms}`
    const del = document.createElement('button')
    del.setAttribute('class', 'delete')
    del.textContent = '❌clear'
    newDiv.appendChild(newP1)
    newDiv.appendChild(newP2)
    newDiv.appendChild(newP3)
    newDiv.appendChild(newP4)
    newDiv.appendChild(newP5)
    newDiv.appendChild(del)
    document.querySelector('.delete').addEventListener('click', () => {
        document.body.removeChild(newDiv)
    })
}
document.querySelector('#search').addEventListener('click', output)