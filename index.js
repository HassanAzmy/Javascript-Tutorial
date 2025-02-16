const person = {
   username: 'Hassan',
   displayName: 'Azmy',
   hobbies: ['Programming', 'Football'],
   education: {
      subject: "Compute Engineering",
      year: 2020
   }
};

const { username, hobbies } = person;
console.log(username, hobbies);  // 'Hassan' ['Programming', 'Football']

//* We can use a default value
//NOTE: It replaces undefined values not null values
const { Id = 41 } = person;   
console.log(Id);        // 41

//* We can name the extracted values
const { hobbies: interests } = person;
console.log(interests); // ['Programming', 'Football']


//* For nested properties
const { username: name, education: { subject } } = person;
console.log(subject);   // Compute Engineering

//* Extracting the length of the array without using .length property
//NOTE: It works since the Array in JS is an Object with properties like length, name, prototype, ...
const { hobbies: { length } } = person;
console.log(length);    // 2


const cars = [
   {
      year: 2019,
      make: 'Honda'
   },
   {
      year: 2007,
      make: 'Toyota'
   },
   {
      year: 2020,
      make: 'Ford'
   }
];

//* For extracting only the (make) property for each car
for(const {make} of cars) 
   console.log(make); 