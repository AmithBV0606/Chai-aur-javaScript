// CLOSURE

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

// In other words, a closure gives you access to an outer function's scope from an inner function.

// In JavaScript, closures are created every time a function is created, at function creation time.

// Lexical Scope : Inner function has access to the outer function's scope.

function makeFunc() {
  const name = "Mozilla";

  function displayName() {
    console.log(name);
  }

  return displayName;
}

const myFunc = makeFunc();
myFunc();

// Because of the lexical scoping, even after calling "makeFunc()", the "myFunc" variable will have access to the whole scope of "makeFunc".

// The whole lexical scope will be available for "myFunc" variable.