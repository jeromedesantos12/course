const person = {
  firstName: `John`,
  lastName: `Doe`,
  thisFunction: function () {
    console.log(this); // Object { firstName: 'John', lastName: 'Doe',..}
  },
  thisArrow: () => console.log(this), // Window {..}
  thisTimeout: function () {
    setTimeout(function () {
      console.log(this); // Window {..}
    }, 3000);
  },
};

person.thisFunction();
person.thisArrow();
person.thisTimeout();
