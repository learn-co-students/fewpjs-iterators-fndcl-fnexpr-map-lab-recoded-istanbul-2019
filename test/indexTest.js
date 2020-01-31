describe('index.js', function () {
  describe('titleCased()', function () {
    it('returns an array with title case tutorial names', function () {
      expect(titleCased()).to.have.all.members(
        [
          'What does the this keyword mean?',
          'What is the Contutorialuctor OO pattern?',
          'Implementing Blockchain Web API',
          'The Test Driven Development Workflow',
          'What is NaN and how Can we Check for it',
          'What is the difference between stopPropagation and preventDefault?',
          'Immutable State and Pure Functions',
          'What is the difference between == and ===?',
          'What is the difference between event capturing and bubbling?',
          'What is JSONP?'
              ]
      )
    });
  });
});
