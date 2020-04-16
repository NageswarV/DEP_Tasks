/*

In this kata, I want you to write make a Cat constructor that takes arguments name and weight to instantiate a new cat object. The constructor should also have an averageWeight method that returns the average weight of cats created with the constructor.
garfield = new Cat('garfield', 25);
Cat.averageWeight(); // 25

felix = new Cat('felix', 15);
Cat.averageWeight();   // now 20
*/


var Cat = (function () {
    return function (newname, newweight) {

        if (!(newname || newweight)) {
            throw new TypeError("done");
        }
        this.weight = newweight;
        this.name = newname;
        Cat.totalWeight += newweight;
        Cat.count++;
        Object.defineProperty(this, 'weight', {
            configurable: true,
            set: function (newWeight) {
                Cat.totalWeight += newWeight - newweight;
                newweight = newWeight;
            },
            get: function () {
                return newweight;
            }
        });

    }
}());
Cat.count = 0;
Cat.totalWeight = 0;
Cat.averageWeight = function () {
    return Math.floor(Cat.totalWeight / Cat.count);
}