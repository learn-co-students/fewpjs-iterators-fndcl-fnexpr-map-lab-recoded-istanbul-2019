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
  
   let result = tutorials.map((line)=>{
   let word= line.split(" ");
   let letter = word.map((e)=>{
   return e.charAt(0).toUpperCase() + e.slice(1);
   })
   let last= letter.join(" ")
    return last
  })
  console.log(result)
  return result;
}
titleCased(tutorials);
// already writtin

//1 map
//2 split by " " 
//3 uppercase
//4 join





// let words = tutorials.split(' ')

// const titleCased = tutorials.map(words => tutorials.split(' ')) => {

//   for (let i = 0 ; i< words.length ; i++){
//     words[i] = words.charAt(0).toUpperCase()+ words[i].slice(1);
//   }
//   return words.join(' ');
//   let cabsOn = words.map(fuction (titleCased){

//   )}


//   return tutorials // already writtin
// }

// function cabsOn(){
//   let words = tutorials.split(' ');
  
// }


// titleize(string) {
//   let words = string.split(' ');
//   for (let n = 0; n < words.length; n++) {
//     words[n] = words[n].charAt(0).toUpperCase() + words[n].slice(1);
//   }
//   return words.join(' ');


// static capitalize(string){
//   return string.charAt(0).toUpperCase() + string.slice(1);