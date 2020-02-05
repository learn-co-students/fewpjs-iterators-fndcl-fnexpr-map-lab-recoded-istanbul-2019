
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
  //take each word as an array
  let wordsArr = tutorials.split()
  return console.log(wordsArr)
  //make each charat(0).toUpperCase
  // return it together
}


/*
const titleCased = () => {
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }
  return tutorials.map(item => item.split(" ").map(item => item.capitalize()).join(" "))
}*/
