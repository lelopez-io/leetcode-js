var should = require("should");

function findMissing() {
  var nums = Array.prototype.slice.call(arguments)[0];
  nums.sort(function(a, b){return a-b})
  
  let total = nums.length;

  for (let i = nums.length - 1; i >= 0; i--) {
    console.log(`${total - nums[i] + i} = ${total} - ${nums[i]} + ${i}`);

    total = total - nums[i] + i;
  }

  return total;
}

/** EX. 1
  var missingNumber = function(nums) {
        
    let total = nums.length;
    
    for(let i = 0; i < nums.length; i++) {
      total = total + i - nums[i];
    }
    
    return total;
      
  };
 */

/** TRY. 1
  function findMissing() {
    let missingNumber = null;

    var numArray = Array.prototype.slice.call(arguments)[0];

    // this is necessary in order to sort the array by the numbers value
    numArray.sort(function(a, b){return a-b});
    console.log(numArray);

    for (i = 0; i < numArray.length; i++) {

      if (numArray[0] != 0) {
        missingNumber = 0;
        break;
      }

      if (numArray[i] + 1 != numArray[i + 1]) {
        missingNumber = numArray[i] + 1;
        break;
      }
    }

    return missingNumber;
  }
*/

/* [Solution-Number_Type] */
describe("sol-3_Number", function() {
  /* [Test Function] */
  describe("#findMissing()", function() {
    context("only one number is missing", function() {
      it("should return missing number: 2", function() {
        findMissing([3, 0, 1]).should.equal(2);
      });

      it("should return missing number: 8", function() {
        findMissing([9, 6, 4, 2, 3, 5, 7, 0, 1]).should.equal(8);
      });

      it("should return missing number: 0", function() {
        findMissing([1]).should.equal(0);
      });

      it("should return missing number: 18", function() {
        findMissing([
          45,
          35,
          38,
          13,
          12,
          23,
          48,
          15,
          44,
          21,
          43,
          26,
          6,
          37,
          1,
          19,
          22,
          3,
          11,
          32,
          4,
          16,
          28,
          49,
          29,
          36,
          33,
          8,
          9,
          39,
          46,
          17,
          41,
          7,
          2,
          5,
          27,
          20,
          40,
          34,
          30,
          25,
          47,
          0,
          31,
          42,
          24,
          10,
          14
        ]).should.equal(18);
      });
    });
  }); // end function
}); // end solution
