// let name = prompt("What's your name?", "Guest");
// console.log(name);
// let isConfirmed = confirm("Are you sure you want to delete?");
// console.log(isConfirmed);

const user = {
  name: "Rahul",
  age: 21,
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

// 1. Using console.log()
console.log(user);

// // 2. Using console.dir()
// console.dir(user);

