class Student {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeter() {
    return 'Hello，您好 傻逼' + this.firstName + ' ' + this.lastName;
  }
}

var user = new Student('王', '小明');
