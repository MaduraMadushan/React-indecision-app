var nameVar = 'Madura';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Madushan';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// function getPetName() {
//     var petName = 'Hal';
//     return petName;
// }

// getPetName();
// console.log(petName);

// Block scoping

var fullName = 'Madura Madushan';
if(fullName){
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);

