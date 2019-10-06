var should = require('should');

describe('user', function() {
  var user = {
    name: 'tj',
    pets: ['tobi', 'loki', 'jane', 'bandit']
  };
  it('name === t3j', function() {
    user.should.have.property('name', 't3j');
  });

  // user.should.have.property('pets').with.lengthOf(4);

  // // If the object was created with Object.create(null)
  // // then it doesn't inherit `Object.prototype`, so it will not have `.should` getter
  // // so you can do:
  // should(user).have.property('name', 'tj');

  // // also you can test in that way for null's
  // should(null).not.be.ok();

  // someAsyncTask(foo, function(err, result) {
  //   should.not.exist(err);
  //   should.exist(result);
  //   result.bar.should.equal(foo);
  // });
});
