/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself

// Step 2: Inside of the object, add a property named name with a value of your name as a string

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived
const aboutMe = {
    name: 'Omotayo Promise',
    photo: '/week02/images/20220825_181830-min.jpg',
    favoriteFoods: ['rice', 'yam', 'chicken', 'bread'],
    hobbies: ['Photography', 'Eating', 'Sleeping', 'Pondering the cosmos', 'Tech'],
    placesLived: [{
        place: 'Nigeria',
        length: '100000km'
    }, {
        place: 'Nigeria',
        length: '100000km'
    }]

}

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').textContent = aboutMe.name
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').src = aboutMe.photo
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').alt = aboutMe.name
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
aboutMe.favoriteFoods.forEach(food => {
    const liElem = document.createElement('li')
    liElem.innerText = food
    document.querySelector('#favorite-foods').append(liElem)
})
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property
aboutMe.hobbies.forEach(hobby => {
    const liElem = document.createElement('li')
    liElem.innerText = hobby
    document.querySelector('#hobbies').append(liElem)
})
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
aboutMe.placesLived.forEach(Object => {
    const dt = document.createElement('dt').innerText = Object.place
    const dd = document.createElement('dd').innerText = Object.length
    document.querySelector('#places-lived').append(dt)
    document.querySelector('#places-lived').append(dd)
})
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived