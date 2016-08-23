class Markov {
  constructor(props) {
    this.props = props;
    if(!this.props.input) {
      return false;
    }
    this.terminals = {};
    this.startWords = [];
    this.wordStats = {};
    for(let i = 0, length = this.props.input.length; i < length; i++ ) {
      let words = this.props.input[i].split(' ');
      if(this.terminals[words[words.length-1]]) {
        this.terminals[words[words.length-1]]++;
      } else {
        this.terminals[words[words.length-1]] = 1;
      }

      if(words[0].length && !this.startWords.includes(words[0])) { this.startWords.push(words[0]); };

      for( let j = 0, len = words.length - 1; j < len; j++ ) {
        if(this.wordStats.hasOwnProperty(words[j])) {
          this.wordStats[words[j]].push(words[j+1]);
        } else {
          this.wordStats[words[j]] = [words[j+1]];
        }
      }
    }
    for(let word in this.terminals) {
      if(this.terminals[word] < 4 || this.terminals[word] == '' || !this.terminals[word]) { delete this.terminals[word]; }
    }
    delete this.terminals[''];
    delete this.wordStats[''];
  }

  choice(a) {
    return a[Math.floor(a.length * Math.random())];
  }

  makeChain(minLength) {
    if(this.props.minLength && !minLength) {
      minLength = this.props.minLength;
    }
    if(!minLength) { minLength = 10; }
    let word = this.choice(this.startWords),
        chain = [word];
    while ( this.wordStats.hasOwnProperty(word) ) {
      let nextWords = this.wordStats[word];
      word = this.choice(nextWords);
      chain.push(word);
      if( chain.length > minLength && this.terminals.hasOwnProperty(word) ) {
        break;
      }
    }
    if ( chain.length < minLength ) return this.makeChain(minLength);
    return chain.join(' ');
  }
}

module.exports = Markov;
