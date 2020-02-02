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
//charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
//split()method turns a String into an array of strings, by separating the string at each instance of a specified separator string.
//substring()method returns the part of the string between the start and end indexes(not including last), or to the end of the string.
//join()method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
const titleCased = () => {
return tutorials.map(function(title){
let splitTitle=title.split(' ')
for(let i=0; i<splitTitle.length; i++) {
splitTitle[i]= splitTitle[i].charAt(0).toUpperCase()+splitTitle[i].substring(1); }
return splitTitle.join(' ') }) 
  return tutorials }