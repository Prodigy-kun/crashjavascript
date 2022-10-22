function getGrades(inputSelector) {
    // get grades from the input box
    // split them into an array (String.split(','))
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    // return grades
    grades = document.querySelector(inputSelector).value
    const gradeList = grades.split(',')
    const ugradeList = gradeList.map((x) => x.toUpperCase())
    return ugradeList
}

function lookupGrade(grade) {
    // converts the letter grade to it's GPA point value and returns it
    if (grade === 'A') {
        return 4
    } else if (grade === 'B') {
        return 3
    } else if (grade === 'C') {
        return 2
    } else if (grade === 'D') {
        return 1
    } else if (grade === 'E') {
        return 1
    } else {
        return 0
    }
}

function calculateGpa(grades) {
    // gets a list of grades passed in
    // convert the letter grades to gpa points
    // calculates the GPA
    // return the GPA
    const forFilter = grades.map(lookupGrade);
    const sum = forFilter.reduce((x, y) => x + y, 0)
    return sum / grades.length
}

function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector
    document.querySelector(selector).innerText = gpa
}

function clickHandler() {
    // when the button in our html is clicked:
    // get the grades entered into the input
    // calculate the gpa from the grades entered
    const grades = getGrades('#grades')
    const gpa = calculateGpa(grades)
    outputGpa(gpa, '#output')

}
document.querySelector("#submitButton").addEventListener("click", clickHandler);