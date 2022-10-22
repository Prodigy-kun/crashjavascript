/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
const currDate = new Date()
// Step 2: Declare another variable to hold the day of the week
const options = {
    weekday: 'long'
}
const weekday = currDate.toLocaleString('en-us', options)
console.log(weekday)
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
let message = ''


// Step 4: Declare a variable to hold a message that will be displayed

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'

// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
function displayMessage(weekday, message) {
    if (weekday !== 'saturday' || weekday !== 'sunday') {
        message = 'Hang in there!'
    } else {
        message = 'Woohoo! it is the weekend!'
    }
    return message
}
/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let message2 = ''
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (weekday) {
    case 'saturday':
    case 'sunday':
        message2 = 'Woohoo! it is the weekend!'
        break
    default:
        message2 = 'Hang in there!'
}
/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.querySelector('#message1').textContent = message2
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector('#message2').textContent = weekday
/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let temples_list = []
// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
function output(temples) {
    temples.forEach(temple => {
        const article = document.createElement('article')

        const header1 = document.createElement('h3')
        header1.textContent = temple.templeName
        const header2 = document.createElement('h4')
        header2.textContent = temple.location
        const header3 = document.createElement('h4')
        header3.textContent = temple.dedicated;
        const image = document.createElement('img')
        image.setAttribute('src', temple.imageUrl)
        image.setAttribute('alt', temple.templeName)
        article.appendChild(header1)
        article.appendChild(header2)
        article.appendChild(header3)
        article.appendChild(image)
        document.querySelector('#temples').appendChild(article)

    })
}
// Step 3: Create another function called getTemples. Make it an async function.
async function getTemples() {
    const request = await fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json')
    if (request.ok) {
        temples_list = await request.json()
        output(temples_list)
    }
}
getTemples()


const reset = function () {
    const templeDiv = document.querySelector('#temples')
    templeDiv.innerHTML = ''
}

function compare(a, b) {
    if (a.templeName < b.templeName) {
        return 1
    } else if (a.templeName > b.templeName)
        return -1
    else {
        return 0
    }

}

function sortBy() {

    reset()
    let shouldSort = document.querySelector('#sortby').value
    console.log(shouldSort)
    if (shouldSort === "templeNameAscending") {
        temples_list.sort(compare)
        output(temples)
    }
    if (shouldSort === "templeNameDescending") {
        temples_list.sort(compare)
        output(temples)
    }

}


document.querySelector('#sortBy').addEventListener('change', sortBy);

// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples

// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files