const address = 'kapasia';
const nAddress = address.slice(2,6) //start  from 2 end before 6 (means 5)
console.log(nAddress)

const frieends = 'Rahim, karim, nujair, hasnat';
const friend = frieends.split(','); //split by comma
console.log(friend)

const riF = [ 'Rahim', ' karim', ' nujair', ' hasnat' ];
console.log(riF.join()); // join by comma also can do by [ |, /,-,+ ]


// easy way to concat 
const firstName = 'Mahmudul';
const lastName = 'Hasan';

const fullName = firstName + ' ' + lastName;
console.log(fullName)


// check that character present here or not 
console.log(lastName.includes('Ha'))