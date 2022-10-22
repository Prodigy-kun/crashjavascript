// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;

async function getPokemon(url, doThis) {
    const response = await fetch(url);
    //check to see if the fetch was successful
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        const data = await response.json();
        doThis(data);
    }
}

function doStuff(data) {
    results = data;
    console.log("first: ", results);
    const output = document.querySelector('#output')
    output.innerHTML = `<h2>${results.name}</h2>
    <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
}
const urlList = "https://pokeapi.co/api/v2/pokemon";
const pList = document.querySelector('#outputList')
const doStuffList = function (data) {
    console.log(data)
    let pokeList = data.results
    pokeList = sortPokemon(pokeList)
    console.log(pokeList)
    pokeList.forEach(Element => {
        const newList = document.createElement('li')
        newList.textContent = Element.name
        pList.append(newList)
    })
}

function compare(a, b) {
    // compare the name in the object according to the conditions
    // if return is greater than 0(put a after b), if negative, put a before b else, they are equal
    if (a.name > b.name) {
        return 1
    } else if (a.name > b.name) {
        return -1
    } else {
        return 0;
    }
}

function sortPokemon(list) {
    const sortedList = list.sort(compare)
    return sortedList
}

getPokemon(urlList, doStuffList)
getPokemon(url, doStuff);
// console.log(sortPokemon(pList))
console.log("second: ", results);