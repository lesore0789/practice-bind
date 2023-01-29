const Employee = require('./employee')

let john = new Employee("John Wick", "Dog Lover");

const boundSayName = john.sayName.bind(john);

global.setTimeout(boundSayName, 2000);

const boundOccupation = john.sayOccupation.bind(john);

global.setTimeout(boundOccupation, 3000);
