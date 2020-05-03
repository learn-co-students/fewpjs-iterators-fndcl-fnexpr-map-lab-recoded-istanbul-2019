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

titleCased = () => {
  return tutorials.map(item => {
    let space = item.split(" ");
    return space.map(item1 => item1.charAt(0).toUpperCase() + item1.slice(1)).join(" ")
  })

 }
 titleCased();