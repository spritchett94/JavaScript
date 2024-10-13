// sayHi();

class Dog {
     constructor(name, age, breed, owner) {
          this.name = name;
          this.age = age;
          this.breed = breed;
          this.owner = owner;
          // you can change two words by first double clicking the word and hit alt and double click the next word
     }

     dogStats() {
          return `${this.name} is a ${this.breed} who is ${this.age} years old, belonging to ${this.owner}.`;
     }
     
     static totalAge(dog1, dog2) {
          const age1 = dog1.age;
          const age2 = dog2.age;

          return age1 + age2;
     } 
} 

const dog1 = new Dog('Bruce', 3, 'Pitbull', 'Tracy');
const dog2 = new Dog('Charlie', 5, 'Beagle', 'Joesph')
const dog3 = new Dog('Stella', 1, 'French Bulldog', 'Roxanne')
const dog4 = new Dog('River', 7, 'Australian Shepard', 'Sarah')

document.getElementById('dog1').innerHTML = dog1.dogStats();
document.getElementById('dog2').innerHTML = dog2.dogStats();
document.getElementById('dog3').innerHTML = dog3.dogStats();
document.getElementById('dog4').innerHTML = dog4.dogStats();

// console.log(dog1);
// console.log(dog1.dogStats());
// console.log(dog2);
// console.log(dog2.dogStats());
// console.log(Dog.totalAge(dog1, dog2));


// function sayHi() {
//      return console.log('hello this function can be called anywhere!');
// }
// functions, once the code is compiled are automatically hoisted (placed) at the top. SO youcan access a function at any
// point in the code. Classes you cannot access, make an instance of it before you declare it - they must be declare first 
// before you do anything with them.
