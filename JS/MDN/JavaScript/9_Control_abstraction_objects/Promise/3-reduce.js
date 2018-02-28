const func1 = () => console.log('func1');
const func2 = () => console.log('func2');

[func1, func2].reduce((p, f) => p.then(f), Promise.resolve());

// equivalent to
Promise.resolve()
  .then(func1)
  .then(func2);

/**
 * The composeAsync function will accept any number of functions as arguments, 
 * and will return a new function that accepts an initial value to be passed through the composition pipeline. 
 * This is beneficial because any or all of the functions may be either asynchronous or synchronous, 
 * and they are guaranteed to be executed in the correct order:
 */
let applyAsync = (acc, val) => acc.then(val);
let composeAsync = (...funcs) => x =>
  funcs.reduce(applyAsync, Promise.resolve(x));

  setTimeout(function() {
    
  });