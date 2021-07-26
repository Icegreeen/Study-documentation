
// Constructor function for Person 

function Person(first, last, age, eye) {
    // builder properties with default values
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
  
// Create 2 Person objects
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
  
// Add nationality to first object
myFather.nationality = "English";

// Add a name method to first object
myFather.name = function() {
    return this.firstName + " " + this.lastName;
};

console.log(myFather)
console.log("My father is " + myFather.name()) 
