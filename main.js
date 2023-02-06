// task:  

let objects = [
    { name: 'Rick', surname: 'Graenet' },
    { name: 'Djudit', surname: 'Stark' },
    { name: 'Peter', surname: 'Pen' }
];

function filter(array, property, value) {
    let newArray = [];
    for (let el in array) {
        if (array[el][property] === value) {
            newArray.push(array[el]);
            return newArray;
        }
    };
};

console.log(filter(objects, 'name', 'Rick'));