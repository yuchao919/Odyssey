/**
 *  It is usually safer to provide an initial value because there are three possible outputs without initialValue, 
 * as shown in the following example.
 */

var maxCallback = (acc, cur) => Math.max(acc.x, cur.x);
var maxCallback2 = (max, cur) => Math.max(max, cur);

// reduce() without initialValue
[{ x: 22 }, { x: 42 }].reduce(maxCallback); // 42
[{ x: 22 }].reduce(maxCallback); // { x: 22 }
// [].reduce(maxCallback); // TypeError

// map/reduce; better solution, also works for empty arrays
[{ x: 22 }, { x: 42 }].map(el => el.x).reduce(maxCallback2, -Infinity); // 42
[].map(el => el.x).reduce(maxCallback2, -Infinity); // -Infinity
// [].map(el => el.x).reduce(maxCallback2); // TypeError