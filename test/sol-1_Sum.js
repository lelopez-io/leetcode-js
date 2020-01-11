var should = require("should");

function sum() {
  // Convert arguments object to an array
  var args = Array.prototype.slice.call(arguments);

  // Throw error if arguments contain non-finite number values
  if (!args.every(Number.isFinite)) {
    throw new TypeError("sum() expects only numbers.");
  }

  // Return the sum of the arguments
  return args.reduce(function(a, b) {
    return a + b;
  }, 0);
}

/* [Solution-Number_Type] */
describe("sol-1_Sum", function() {

    /* [Test Function] */
    describe("#sum()", function() {

      context("without arguments", function() {
        it("should return 0", function() {
          sum().should.equal(0);
        });
      });

      context("with number arguments", function() {
        it("should return sum of arguments", function() {
          sum(1, 2, 3, 4, 5).should.equal(15);
        });

        it("should return argument when only one argument is passed", function() {
          sum(5).should.equal(5);
        });
      });

      context("with non-number arguments", function() {
        it("should throw error", function() {
          (function() {
            sum(1, 2, "3", [4], 5);
          }.should.throw(TypeError("sum() expects only numbers.")));
        });
      });

    });// end function


});// end solution
