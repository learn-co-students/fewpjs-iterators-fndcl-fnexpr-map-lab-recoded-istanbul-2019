const tutorials = [
  "what does the this keyword mean?",
  "What is the Contutorialuctor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?"
];

const titleCased = function() {
  const result = tutorials.map(sentence => {
    const words = sentence.split(" ");
    let newSentence = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return newSentence.join(" ");
  });

  return result;
};

titleCased();