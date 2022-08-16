class GuessingGame {

    constructor() {}
 
 setRange(min, max) {
    this.min = min;
    this.max = max;
    console.log('start setRange');
  }

  guess() {
    //console.log('minimum ' + this.min);
    //console.log('maximum ' + this.max);
    return Math.ceil((this.min + this.max) / 2);
  }

  lower() { // number which is greater than answer
    //console.log('Start lower');
    return this.max = Math.ceil((this.min + this.max) / 2);
  }

  greater() { //number which is lower than answer
    //console.log('Start greater');
    return this.min = Math.ceil((this.min + this.max) / 2);
  }
}

module.exports = GuessingGame;
