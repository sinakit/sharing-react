// Basic object
const user = {
  name: "Sinak",
  age: 30,
  isAdmin: true,
  skills: ["React", "Next.js", "Golang"],
  
  // method (function inside object)
  greet() {
    return `Hello, my name is ${this.name}`;
  }
};

console.log(user.name); // Accessing property

// let name ;
// let age;
// let gender;

const person = {
  name : "John",
  age: 25,
  gender: 'male'
};