# JS-5th-Lesson
### task:filtering an array of objects by property value.
Task ...    
Write a filter function that filters an array of objects by property value. The array, property name, and value must be passed as arguments.  

my decision:  
let objects = [  
___  { name: 'Rick', surname: 'Graenet' },  
___  { name: 'Djudit', surname: 'Stark' },  
___  { name: 'Peter', surname: 'Pen' }  
];  

function filter(array, property, value) {  
___  let newArray = [];  
___  for (let el in array) {  
_____  if (array[el][property] === value) {  
_______  newArray.push(array[el]);  
_______  return newArray;  
_____  }  
___  };  
};  

console.log(filter(objects, 'name', 'Rick'));  