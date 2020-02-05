var should = require("should");

function findMajority(nums) {
    const size = nums.length;
    const thres = Math.floor(size / 3);
    
    var numsMap = {};
    var res = []

    for (var i = 0; i < nums.length; i++) {
        (numsMap[nums[i]]) ? numsMap[nums[i]]++ : numsMap[nums[i]] = 1;
    }

    for (const [key, value] of Object.entries(numsMap)) {
        if (value > thres) res.push(Number(key))
    }

    console.log(numsMap);
    return res
}

// for loop after another
// O(n) + O(n) = O(2n) = O(n) ==> 3 + 3 = 6

// for loop inside another
// O(n) * O(n) = O(n^2) ==> 3 * 3 = 9

// O(n)



/* [Solution-Number_Type] */
describe("sol-4_Majority", function() {
  /* [Test Function] */
  describe("#findMajority()", function() {
    context("with array argument", function() {
      it("should return array: [3]", function() {
        findMajority([3, 2, 3]).should.eql([3]);
      });

      it("should return array: [1,2]", function() {
        findMajority([1,1,1,3,3,2,2,2]).should.eql([1,2]);
      });

      it("should return array: [1]", function() {
        findMajority([1]).should.eql([1]);
      });

      it("should return array: [2]", function() {
        findMajority([2,2]).should.eql([2]);
      });
    });
  }); // end function
}); // end solution
