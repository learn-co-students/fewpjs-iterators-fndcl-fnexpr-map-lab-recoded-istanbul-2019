
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
  let newArray = tutorials.map(function(element){
    //split the current element of the array into words
    element = element.split(" ");
    //iterate through the new array of words
    let newWords = [];
    element.forEach(function(word) {
      word = word[0].toUpperCase() + word.slice(1);
      newWords.push(word);
    })
    console.log("New array: ", newWords);
    //for each word, make the first letter capital
    //join it back togeteher into a string
    return newWords.join(" ");
  });
    //return new array
    return newArray;
}


/*
const titleCased = () => {
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }
  return tutorials.map(item => item.split(" ").map(item => item.capitalize()).join(" "))
}*/
