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
  const tutorialsMap = tutorials.map(whole => {
    const parts = whole.split(" ")
    const capital = parts.map(part => {
      return part.charAt(0).toUpperCase() + part.substring(1)
    })
      return capital.join(" ")
  })
    return tutorialsMap
}
