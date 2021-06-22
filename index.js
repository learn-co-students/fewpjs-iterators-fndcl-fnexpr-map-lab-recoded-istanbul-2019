const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
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
  return tutorials.map(function(sentence){
    let siplited = sentence.split(' ');
    let newArr = []
    for (let word of siplited) {
      let captil = word[0].toLocaleUpperCase() + word.slice(1);
      newArr.push(captil)
    }
    let joined = newArr.join(' ')
    console.log(joined)
    return joined
    })
}