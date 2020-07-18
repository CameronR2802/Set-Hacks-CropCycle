const fs = require('fs');
const uuid = require('uuid');
const utils = require('./utils');
const print = utils.print;

/*let data = {}
for(i=0; i<20; i++){
    let student = { 
        name: 'Mike',
        age: 23, 
        gender: 'Male',
        department: 'English',
        car: 'Honda' 
    };
    data[JSON.stringify(uuid.v4())] = 2;
}*/

let dict = {}

for(i=0; i<20; i++){
    let student = { 
        seller: 'Mike',
        price: 23, 
        gender: 'Male',
        description: 'English',
        
        car: 'Honda' 
    };
    dict[uuid.v4()] = student;    
}
 
let data = JSON.stringify(dict);
fs.writeFileSync('postingData.json', data);