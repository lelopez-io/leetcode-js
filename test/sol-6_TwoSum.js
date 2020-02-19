var should = require("should");

/** DESCRIPTION
 * Given an array of integers, return indices of the two numbers such that they
 *  add up to a specific target.
 *
 * You may assume that each input would have exactly one solution,
 *  and you may not use the same element twice.
 *
 */

function twoSum(nums, target) {
    complementsMap = {};
    // save a key value pair if key doesn't exist
    //      key - is the complement,
    //      value - is the index of the number already checked.

    for (i = 0; i < nums.length; i++) {
        currentNumber = nums[i];

        if (currentNumber in complementsMap) {
            console.log("current number: ", currentNumber, "is a complment");
            return [complementsMap[currentNumber], i];
        } else {
            console.log("current number: ", currentNumber, "is not complment");
            complement = target - currentNumber;
            complementsMap[complement] = i;
        }
    }
}

/* [Solution-Number_Type] */
describe("sol-6_TwoSums", function() {
    /* [Test Function] */
    describe("#twoSum()", function() {
        context("An array of numbers where set exist", function() {
            it("should return two different sets", function() {
                twoSum([2, 7, 11, 15], 9).should.eql([0, 1]);
            });
        });
    }); // end function
}); // end solution
