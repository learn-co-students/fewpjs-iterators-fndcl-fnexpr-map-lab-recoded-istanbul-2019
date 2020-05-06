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

  return tutorials
  .map(function (tutorial){
    let arr = tutorial.split(' ');
    let newTitle = '';
    for(let i = 0 ; i < arr.length ; i++){
    if(i === arr.length -1){
      newTitle+= arr[i][0].toUpperCase() + arr[i].slice(1);
    }else {
      newTitle+= arr[i][0].toUpperCase() + arr[i].slice(1) + ' ';
    }
    
    }
    return newTitle;
    })
  
}
//tuttorials[i][0].toUpperCase()

