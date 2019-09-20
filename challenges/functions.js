// ==== Callbacks ====

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/

const consume = (a,b,cb)=>{
  return cb(a,b);
}






/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

const add = (c,d) => {return c+d };
console.log("First Callback:", consume(2,300,add));
const multiply = (c,d) => {return c*d };
console.log("Second Callback:", consume(2,300,multiply));
const greeting = (c,d) => {return `Hello ${c} ${d}, nice to meet you`};
console.log("Third Callback:", consume("Kyle","Corbin",greeting));



/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ====

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: I think Brit explained it best with City->Provinces->Country. Since the nestedFunction is inside of the parent function it has access to all of its variables because as the compiler reads from top to bottom, it has all of the variables in memory by the time it gets to the nested call to it. Its the same way I can memorize all of the billboards I pass  on my way to the movies, and recall them once I arrive, but I can't recall any of the movie posters inside of the movie theater on my drive to the movie theater. 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
