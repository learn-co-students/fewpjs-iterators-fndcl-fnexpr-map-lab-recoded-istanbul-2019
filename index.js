const tutorials = [
    'what does the this keyword mean?',
    'What is the Contutorialuctor OO pattern?',
    'implementing Blockchain Web API',
    'The Test Driven Development Workflow',
    'What is NaN and how Can we Check for it',
    'What is the difference between stopPropagation and preventDefault?',
    'Immutable State and Pure Functions',
    'what is the difference between == and ===?',
    'what is the difference between event capturing and bubbling?',
    'what is JSONP?'
];

const titleCased = () => {
    return tutorials.map(titleCased => {
        let empArr = []
        let array1 = titleCased.split(" ")
        array1.forEach(element => {
            empArr.push(element[0].toUpperCase() + element.slice(1))
        })
        return empArr.join(" ")

    })
}




// const titleCased = function titleCased(tutName) {
//     let empArr = []
//     let array1 = tutName.split(" ")

//     array1.forEach(element => {
//         empArr.push(element[0].toUpperCase() + element.slice(1))
//     })
//     console.log(empArr);

//     return empArr.join(" ")
// }


// let newArray = tutorials.map(titleCased)