// Immediately Invoked Function Expression (IIFE)
const a = 10;
(function anf(){ // Named IIFE
    console.log("DB CONNECTED");
    console.log(a);
})();
// Semicolon is MUST

( () => {  // Unnamed IIFE
    console.log(`DB DISCONNECTING.....`)
}) ();

// Passing the values in IIFE
( (companyName) => { 
    console.log(`DB DISCONNECTED....Thank you for using ${companyName} service.`)
})("Lamda's");