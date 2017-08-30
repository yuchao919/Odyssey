function func1(a) {
  arguments[0] = 99; // updating arguments[0] also updates a
  console.log(a);
}
func1(10); // 99

function func2(a) {
  a = 99; // updating a also updates arguments[0]
  console.log(arguments[0]);
}
func2(10); // 99

function func3(a = 55) {
  arguments[0] = 99; // updating arguments[0] does not also update a
  console.log(a);
}
func3(10); // 10

function func4(a = 55) {
  a = 99; // updating a does not also update arguments[0]
  console.log(arguments[0]);
}
func4(10); // 10

function func5(a = 55) {
  console.log(arguments[0]);
}
func5(); // undefined
