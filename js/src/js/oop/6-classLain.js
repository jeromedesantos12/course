class Peliharaan {
  // parent class/object
  constructor(name, age) {
    this.name = name; // parent constructor
    this.age = age;
  }
  makan() {
    return `${this.name} lagi makan`; // parent method
  }
}

class Kucing extends Peliharaan {
  // child class/object
  constructor(name, age, lives) {
    console.log("child executed");
    super(name, age); // call parent constructor
    this.lives = lives;
  }
  meong() {
    return "Meeonng!"; // child method
  }
}

class Anjing extends Peliharaan {
  // child class/object
  gongong() {
    return "guk guk!!"; // child method
  }
}
