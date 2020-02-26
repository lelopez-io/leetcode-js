var should = require("should");

/** DESCRIPTION
 * Given an array nums of n integers, are there elements num_a, num_b, c in nums
 * such that num_a + num_b + c = 0? Find all unique triplets in the array which gives
 * the sum of zero.
 *
 *
 * Note: The solution set must not contain duplicate triplets.
 */

function threeSum(nums) {
    nums.sort(function(num_a, num_b) {
        return num_a - num_b;
    });
    if (nums[0] > 0) return []; // if no negatives exist then no need to process

    let solutionArray = [];

    // for every number except the last two we will search two number to complement
    for (i = 0; i < nums.length - 2; i++) {
        // if this is our first number and the number doesn't equal the previous number
        if (i == 0 || (i > 0 && nums[i] != nums[i - 1])) {
            let lo = i + 1;
            let hi = nums.length - 1;
            let sum = 0 - nums[i];

            while (lo < hi) {
                if (nums[lo] + nums[hi] == sum) {
                    solutionArray.push([nums[i], nums[lo], nums[hi]]);
                    while (lo < hi && nums[lo] == nums[lo + 1]) lo++; // avoid duplicate b
                    while (lo < hi && nums[hi] == nums[hi - 1]) hi--; // avaoid duplicate c
                    lo++;
                    hi--; // just go to the next one
                } else if (nums[lo] + nums[hi] < sum) {
                    lo++; // sum is too small so pick a bigger num
                } else {
                    hi--; // sum is too high so pick a smaller num
                }
            }
        }
    }

    console.log(solutionArray);
    return solutionArray;
}

/** TRY 2: 
    function threeSum(nums) {
        nums.sort(function(num_a, num_b) {
            return num_a - num_b;
        });
        // should be O(n^2)

        // as we iterate through the nums array, each num will be the target for our
        // twoSums iteration. this means the outer for loop wil also have an inner
        // for loop where j_inital is greater than i_current.

        solutionArray = [];

        for (i = 0; i < nums.length - 2; i++) {
            num_a = nums[i];
            console.log(`num_a is: ${num_a}`);

            complementsMap = {};
            // save num_a key value pair if key doesn't exist
            //      key - is the complement,
            //      value - is the index of the number already checked.
            for (j = i + 1; j < nums.length; j++) {
                num_b = nums[j];
                console.log(`\tnum_b is: ${num_b}`);

                if (num_b in complementsMap) {
                    console.log(`\t\tnum_b is actually num_c`);
                    // so num_c is the key
                    // and complementsMap[num_c] gives us the real num_b
                    num_c = num_b;
                    num_b = complementsMap[num_c];
                    let possibleTriplet = [num_a, num_b, num_c];
                    console.log(`\t\tpossibleTriplet: ${possibleTriplet}`);
                    solutionArray.push(possibleTriplet);
                } else {
                    num_c = -(num_a + num_b);
                    complementsMap[num_c] = num_b;
                    // console.log(`num_b: ${num_b}, is not complment`);
                    console.log(`\t\tI need num_c to be: ${num_c}`);
                }
            }
        }

        console.log(solutionArray);
        return solutionArray;
    }
*/

/** TRY: 1 Before re-solving two sums again.
    function threeSum(nums) {
        target = 0;

        compMapSingle = {};

        // compMaySingle
        //  key: complement, that way we can find what number it is complementing
        //  value: index of first number
        for (i = 0; i < nums.length; i++) {
            var complement = target - nums[i];
            console.log(`complement of ${nums[i]} is ${complement}`);
            compMapSingle[complement] = i;
        }
        console.log(compMapSingle);

        // compMapPair
        //  this iterates through the compArraySingle and uses those keys
        //  as the targetSum. When we find it we will have the targetSum indexes
        //  and and the index of the first number from the SingleMap

        // the targetSum should not add the currentIndex of the targetComplment

        for ([key, value] of Object.entries(compMapSingle)) {
            console.log(key, value);
        }
    }
*/

/* [Solution-Number_Type] */
describe("sol-7_ThreeSums", function() {
    /* [Test Function] */
    describe("#threeSum()", function() {
        context("An array of numbers where set exist", function() {
            it("should return two different sets", function() {
                threeSum([-1, 0, 1, 2, -1, -4]).should.eql([
                    [-1, -1, 2],
                    [-1, 0, 1]
                ]);
            });

            it("should return two different sets", function() {
                threeSum([
                    -4,
                    -2,
                    -2,
                    -2,
                    0,
                    1,
                    2,
                    2,
                    2,
                    3,
                    3,
                    4,
                    4,
                    6,
                    6
                ]).should.eql([
                    [-4, -2, 6],
                    [-4, 0, 4],
                    [-4, 1, 3],
                    [-4, 2, 2],
                    [-2, -2, 4],
                    [-2, 0, 2]
                ]);
            });
        });
    }); // end function
}); // end solution
