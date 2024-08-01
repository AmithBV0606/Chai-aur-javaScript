// LEXICAL SCOPING

function init() {
    let name = "Mozilla";
  
    function displayName() {
      console.log(name);
    }
  
    displayName();
  }
  
  init();
  
  // Breakdown of the above function
  
  // 1) "init()" creates a local variable called "name" and a function called "displayName()".
  
  // 2) "The displayName()" function is an inner function that is defined inside init() and is available only within the body of the "init()" function.
  
  // 3) since inner functions have access to the variables of outer functions, "displayName()" can access the variable "name" declared in the parent function, "init()".