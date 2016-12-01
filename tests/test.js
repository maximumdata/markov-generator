let expect = require('chai').expect
let MarkovGen = require('../index.js')

describe('Markov Chain Generator', () => {
  let testInput = ['Test sentence number 1', 'This is another test sentence', 'I\'m test sentence number two!', 'I can\'t believe that this is another test', 'TEST of insensitive']

  it('throws with no input', () => {
    let fn = () => {
      return new MarkovGen({})
    }
    expect(fn).to.throw(Error)
  })

  it('returns a string', () => {
    let string = new MarkovGen({
      input: testInput,
      minLength: 2
    }).makeChain()
    expect(string).to.not.equal('')
  })

  it('returns a string with a minimum amount of words set to the configuration variable', () => {
    let minlenstr = new MarkovGen({
      input: testInput,
      minLength: 3
    }).makeChain()
    let minlenarr = minlenstr.split(' ')
    expect(minlenarr.length).to.be.at.least(3)
  })

  it('returns a string with proper letter casing', () => {
    let testInput = ['Test seNtence', 'anothEr teSt sentenCe', 'A thIRd tEST seNtence']
    let string = new MarkovGen({
      input: testInput,
      minLength: 2
    }).makeChain()
    expect(string).to.not.equal(string.toLowerCase())
  })
})
