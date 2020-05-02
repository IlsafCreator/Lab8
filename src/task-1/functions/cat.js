class Cat {
  constructor(name) {
    this.name = name;
    this.birthday = new Date();
    this.listOfFears = ['vacuum cleaner', 'beep'];
    this.listOfPositive = ['ksksks'];
  }
  meow() {
    return 'Meow!';
  }
  reaction(feeling) {
    if (this.listOfFears.indexOf(feeling) > -1) {
      return 'run from here!!!!';
    }
    if (this.listOfPositive.indexOf(feeling) > -1) {
      return 'Hmm? Food?! I`m already running.';
    }
    return false;
  }
}

module.exports = Cat;