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
  return tutorials.map(function(tutorial){
    let wordArr = tutorial.split(' ')
    for (let i = 0 ; i < wordArr.length; i++) {
      wordArr[i] = wordArr[i].charAt(0).toUpperCase()+wordArr[i].substring(1); 
    }
    return wordArr.join(' ') 
  }) 
}
