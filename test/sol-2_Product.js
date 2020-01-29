var should = require("should");

function product() {
  var args = Array.prototype.slice.call(arguments);

  var tempArray = [];

  //[starting from left]
  // index 0: nothing
  // index 1: 0
  // index 2: 0*1
  // index 3: 0*1*2
  var product = 1;
  
  for (i = 0; i < args[0].length; i++) {
    tempArray[i] = product;
    product *= args[0][i];
  }

  //[starting from right]
  // index 3: nothing
  // index 2: 3
  // index 1: 3*2
  // index 0: 3*2*1
  var product = 1;
  var rArray = [];
  for (i = args[0].length - 1; i >= 0; i--) {
    tempArray[i] *= product;
    product *= args[0][i];
  }

  return tempArray
}

/** REF. 1: https://www.dyn-web.com/javascript/arrays/value-vs-reference.php
    Arrays are reference types in javascript

    we need to compare their value not there reference in memory
  */

/** REF. 2: https://github.com/tj/should.js/
   .equal vs .eql

   .eql: The object is compared by its actual content, not just reference equality.
  */

/** EX. 1: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript

    function arraysEqual(a, b) {
      if (a === b) return true;
      if (a == null || b == null) return false;
      if (a.length != b.length) return false;

      // If you don't care about the order of the elements inside
      // the array, you should sort both arrays here.
      // Please note that calling sort on an array will modify that array.
      // you might want to clone your array first.

      for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
      }
      return true;
    }

  */

/* [Solution-Number_Type] */
describe("sol-2_Product", function() {
  /* [Test Function] */
  describe("#product()", function() {
    context("with arguments", function() {
      it("should return product of other values in array", function() {
        product([1, 2, 3, 4]).should.eql([24, 12, 8, 6]);
      });
    });
  }); // end function
}); // end solution
