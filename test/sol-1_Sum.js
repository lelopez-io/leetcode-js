var should = require("should");

function sum() {
  // Convert arguments object to an array
  var args = Array.prototype.slice.call(arguments);
  
  // check for non-numbers
  // if non-number is detected return error
  // using the not-operator to avoid saving output to memory
  if (!args.every(Number.isFinite)) {
    throw new TypeError("sum() expects only numbers.");
  }

  return args.reduce((a,b) => a + b, 0)
  

  /** TRY. 1: using for loops to iterate
    for (let i = 0; i < args.length; i++) 
    // loop-start: i < args.length
    {
      var argsType = (typeof args[i])

      if (argsType != "number") {
        console.log(argsType, args[i])

        // throw error here:
        throw new TypeError("sum() expects only numbers.");
      }
      
    }
    // loop-end: i++
  */

  /** EX. 1: https://www.w3schools.com/js/js_array_iteration.asp
    var numbers = [45, 4, 9, 16, 25];
    var allOver18 = numbers.every(myFunction);

    function myFunction(value, index, array) {
      return value > 18;
    } 
  */

  /** TRY. 2: using EX. 1 Array.every() iteration
    var arrOut = args.every(Number.isFinite)
    if (arrOut == false) {
      throw new TypeError("sum() expects only numbers.");
    }
  */
  
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
