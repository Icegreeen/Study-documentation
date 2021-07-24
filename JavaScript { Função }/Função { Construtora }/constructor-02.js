

// Constructor function for Person 

function Person(firstName,lastName,age,eyeColor) {

    // builder properties with default values

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;

    // no default value: this.nationality = "English";

    this.changeName = function (name) {
      this.lastName = name;
    }

}
  // Create a Person object
const myMother = new Person("Sally","Rally",48,"green");
  
  // Change last name
myMother.changeName("Doe");

console.log("My mother's last name is " + myMother.lastName)

  