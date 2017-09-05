/** 
 * Syntax:
 * array.splice(start)
 * array.splice(start, deleteCount)
 * array.splice(start, deleteCount, item1, item2, ...) 
 */

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

myFish.splice(2, 0, 'drum'); // insert 'drum' at 2-index position
console.log(myFish); // myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]

myFish.splice(2, 1); // remove 1 item at 2-index position (that is, "drum")
console.log(myFish); // myFish is ["angel", "clown","mandarin", "sturgeon"]

myFish.splice(-1, 1, 'drum'); // insert 'drum' at 2-index position
console.log(myFish); // myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]

// Remove all elements after index 2 (incl.)
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2);

// myFish is ["angel", "clown"]
// removed is ["mandarin", "sturgeon"]
