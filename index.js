function receivesAFunction(callback) {
  // do something with the callback function
  callback();
}

// call receivesAFunction and pass a callback function
receivesAFunction(function() {
  console.log('Callback function called');
});
function returnsAnAnonymousFunction() {
  // define and return an anonymous function
  return function() {
    console.log('Anonymous function called');
  }
}

// call returnsAnAnonymousFunction and store the returned function in a variable
const anonymousFunction = returnsAnAnonymousFunction();

// call the anonymous function
anonymousFunction();
function returnsANamedFunction() {
  // define and return a named function
  function namedFunction() {
    console.log('Named function called');
  }

  return namedFunction;
}

// call returnsANamedFunction and store the returned function in a variable
const namedFunction = returnsANamedFunction();

// call the named function
namedFunction();
