// Types of Arrays

//  1) Continuous(Packed) Array : 
//  A continuous array is an array that does not contain missing or empty elements. For example, [1, 2, 3, 4] is a continuous array because it has no missing elements. Continuous arrays are more optimized for performance.

//  2) Holey Array : 
//  A holey array is an array that contains missing or empty elements. For example, [1, 2, , 4] is a holey array because it has a missing element. Holey arrays are less optimized for performance.

// These(Continuous and Holey) Arrays can contain 3 types of elements :

//  1) SMI(Small Integer)
//  2) Packed Elements
//  3) Double (float, string, function)

// ____________________________________________________________________________________________

const arrOne = [1,2,3,4,5] // Packed_SMI_Elements => Best type of array, elements can only be number

arrOne.push('7') // Packed_Elements

arrOne.push(6.5) // Packed_Double_Elements

arrOne[10] = 11; // Holey_Elements

console.log(arrOne)
console.log(arrOne.length)
console.log(arrOne[9]) // undefined

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

// __________________________________________________________________________________________

const arrFour = new Array(3)// Just 3 holes. H_SMI_Elements

arrFour[0] = '1' // Downgraded from Holey_SMI_Elements to Holey_Elements

// Packed_Elements
arrFive.push('1')
arrFive.push('2')
arrFive.push('3')

// ___________________________________________________________________________________________

// const arrFour = new Array(3) // Instead of declaring an Array this way,

const arrFive = [] // This is the better approach, more optimized