# markov-generator

[![npm version](https://badge.fury.io/js/markov-generator.png)](https://badge.fury.io/js/markov-generator) [![Build Status](https://travis-ci.org/maximumdata/markov-generator.svg?branch=master)](https://travis-ci.org/maximumdata/markov-generator) [![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)


A simple ES6 class for generating text using [Markov chains](https://en.wikipedia.org/wiki/Markov_chain). This should result in text that is similar in content and context to the supplied text sample, but (ideally) unique in concept.

## Quickstart
```javascript
const MarkovGen = require('markov-generator');

let markov = new MarkovGen({
  input: ['array of sentences', 'to base the chains on', 'should go here'],
  minLength: 10
});

let sentence = markov.makeChain();
console.log(sentence);
```
