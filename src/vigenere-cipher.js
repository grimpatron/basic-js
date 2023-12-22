const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(iDir = true)
  {
    this.iDir = iDir;
    this.chars = 26;
    this.point = 65;
  }

  encrypt(text, cipher) {
    let result = "";

    if (!text || !cipher) throw new Error("Incorrect arguments!");

    this.text = text.toUpperCase();
    this.cipher = cipher.toUpperCase();


    if (this.text.length > this.cipher.length) {
      this.cipher = this.cipher.repeat( Math.ceil(this.text.length / this.cipher.length));
    }


    for (let i = 0, j = 0; i < this.text.length; i++) {
      const char = this.text.charCodeAt(i) - this.point;
      const shift = this.cipher.charCodeAt(i - j) - this.point;

      if (char < 0 || char > this.chars) {
        result += this.text[i];
        j++;
      } else {
        result += String.fromCharCode(
          ((char + shift) % this.chars) + this.point
        );
      }
    }

    return this.iDir ? result : result.split("").reverse().join("");
  }

  decrypt(text, cipher) {
    let result = "";
    
    if (!text || !cipher) throw new Error("Incorrect arguments!");

    this.text = text.toUpperCase();
    this.cipher  = cipher.toUpperCase();

    if (this.text.length > this.cipher.length) {
      this.cipher = this.cipher.repeat(Math.ceil(this.text.length / this.cipher.length));
    }


    for (let i = 0, j = 0; i < this.text.length; i++) {
      const char = this.text.charCodeAt(i) - this.point;
      const shift = this.cipher.charCodeAt(i - j) - this.point;

      if (char < 0 || char > this.chars) {
        result += this.text[i];
        j++;
      } else {
        result += String.fromCharCode(
          ((char - shift + this.chars) % this.chars) +
            this.point
        );
      }
    }

    if (this.iDir) {
      return result
    }

    return result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
