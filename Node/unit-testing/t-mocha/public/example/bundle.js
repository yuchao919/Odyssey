mocha.setup('bdd'),
  (expect = chai.expect),
  describe('Array', function() {
    describe('.push()', function() {
      it('should append a value', function() {
        var e = [];
        e.push('foo'),
          e.push('bar'),
          expect(e[0]).to.equal('foo'),
          expect(e[1]).to.equal('bar');
      }),
        it('should return the length', function() {
          var e = [],
            t = e.push('foo');
          expect(t).to.equal(1);
          t = e.push('bar');
          expect(t).to.equal(2);
        }),
        describe('with many arguments', function() {
          it('should add the values', function() {
            var e = [];
            e.push('foo', 'bar'),
              expect(e[0]).to.equal('foo'),
              expect(e[1]).to.equal('bar');
          });
        });
    }),
      describe('.unshift()', function() {
        it('should prepend a value', function() {
          var e = [1, 2, 3];
          e.unshift('foo'),
            expect(e[0]).to.equal('foo'),
            expect(e[1]).to.equal(1);
        }),
          it('should return the length', function() {
            var e = [],
              t = e.unshift('foo');
            expect(t).to.equal(1);
            t = e.unshift('bar');
            expect(t).to.equal(2);
          }),
          describe('with many arguments', function() {
            it('should add the values', function() {
              var e = [];
              e.unshift('foo', 'bar'),
                expect(e[0]).to.equal('foo'),
                expect(e[1]).to.equal('bar');
            });
          });
      }),
      describe('.pop()', function() {
        it('should remove and return the last value', function() {
          var e = [1, 2, 3];
          expect(e.pop()).to.equal(3),
            expect(e.pop()).to.equal(2),
            expect(e).to.have.length(1);
        });
      }),
      describe('.shift()', function() {
        it('should remove and return the first value', function() {
          var e = [1, 2, 3];
          expect(e.shift()).to.equal(1),
            expect(e.shift()).to.equal(2),
            expect(e).to.have.length(1);
        });
      });
  }),
  mocha.run();
