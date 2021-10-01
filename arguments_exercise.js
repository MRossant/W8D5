const sumNums = function () {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) { // can't use a forEach on arguments
         sum += arguments[i];
    }

    return sum;
}

// const sumNums = function (...args) {
//     let sum = 0;

//     args.forEach(num => { // can use forEach with '...'
//         sum += num;
//     })

//     return sum;
// }

// Function.prototype.myBind = function(ctx) {
//     let bindArgs = Array.from(arguments); // turning bind arguments into array
//     let that = this; // saving the context
//     return function() {
//         let callArgs = Array.from(arguments); // turnings call arguments into array
//         let args = bindArgs.concat(callArgs); // combining bind args with call args
//         args.shift(); // shifting to get rid of object
//         that.apply(ctx, args);
//     }
// }

// Function.prototype.myBind = function(ctx, ...bindArgs) {
//     let that = this;
//     return function(...callArgs) {
//         that.apply(ctx, bindArgs.concat(callArgs));
//     }
// }


// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true

function curriedSum(numArgs) {
    let numbers = [];
    let sum = 0;
    return function _curriedSum(num) {
        numbers.push(num);
        sum += num;
        if (numbers.length === numArgs) {
            return sum;
        } else {
            return _curriedSum;
        }
    }
}

Function.prototype.curry = function (numArgs) {
    let numbers = []
    let that = this;
    console.log(that);
    return function _curry(num) {
        numbers.push(num);
        if (numbers.length === numArgs) {
            console.log(numbers);
            return that.apply(that, numbers);
        } else {
            return _curry;
        }
    }
}



