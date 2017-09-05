var s = 'Please yes\nmake my day!';
console.log(s);
console.log(s.match(/yes.*day/)); // Returns null
console.log(s.match(/yes[^]*day/)); // Returns ["yes\nmake my day"]
