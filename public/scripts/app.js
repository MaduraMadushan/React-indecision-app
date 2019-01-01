'use strict';

//arguments object

// const add = function(a, b){
//     console.log(arguments);
//     return a + b;
// };
// console.log(add(55, 1, 1001));

var add = function add(a, b) {
    //console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));

//this keyword

var user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};
console.log(user.printPlacesLived());

var multiplier = {
    number: [1, 2, 3],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this2 = this;

        return this.number.map(function (num) {
            return num * _this2.multiplyBy;
        });
    }
};
console.log(multiplier.multiply());
