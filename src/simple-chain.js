const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */


// '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )'
// '( DEF )~~( 3.14 )~~( 8.963 )~~( [object Object] )'

const chainMaker = {
  chains: new Array,

  getLength() {
    return this.chains.length;
  },

  addLink(value) {
    this.chains.push(`( ${value} )`); 

    return this;
  },

  removeLink(pos) {
    if (pos < 1 || pos > this.chains.length || typeof pos !== `number`) { 
      this.chains = [];
      throw new Error( `You can't remove incorrect link!` ); 
    }

    this.chains.splice(pos - 1, 1); 

    return this;
  },

  reverseChain() { 
    this.chains.reverse(); 

    return this; 
  },

  finishChain() { 
    const result = this.chains.join( `~~` ); 
    this.chains = []; 

    return result; 
  }

};

module.exports = {
  chainMaker
};
