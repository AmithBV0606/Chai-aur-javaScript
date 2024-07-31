let myName = "Amith       ";

console.log(myName.length);

// Polyfill
String.prototype.trueLength = function(){
    let newLength = this.trim();
    return newLength.length;
}

console.log(myName.trueLength());

console.log("________________________________________________________________");

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor:"Hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.Amith = function(){
    console.log(`Amith himself is a solder boy`);
}

heroPower.Amith();
myHeros.Amith();

// Here we accessed top level hierarchy and added Amith() property to the Object using prototype

// ________________________________________________________________________________________

// But when we access the low level hierarchy like function, Array and String and add new property to them, that property will not be available for Object.

Array.prototype.heyAmith = function() {
    console.log(`Amith says hello`)
}

myHeros.heyAmith();
heroPower.heyAmith(); // Will throw an error

// In order to connect the low level hierarchies, we use the concept of Prottypal Inheritance