var should = require("should");

/** DESCRIPTION
 * Given an array nums of n integers, are there elements num_a, num_b, c in nums
 * such that num_a + num_b + c = 0? Find all unique triplets in the array which gives
 * the sum of zero.
 *
 *
 * Note: The solution set must not contain duplicate triplets.
 */

function threeSumLoop(nums) {
    // three for loops should be O(n^3)

    pairs = [];

    // console.log("initialized: ", pairs[0]); // value at index 0 is undefined
    // console.log("uninitialized", pairs[0][0]) // value at index 0 is undefined, to you can't access it's index 0

    elements = nums.length;
    nums.sort(function(num_a, num_b) {
        return num_a - num_b;
    });

    for (i = 0; i < elements - 2; i++) {
        num_a = nums[i];

        for (j = i + 1; j < elements - 1; j++) {
            num_b = nums[j];

            for (k = j + 1; k < elements; k++) {
                num_c = nums[k];

                // if triplet add to zero
                if (!(num_a + num_b + num_c)) {
                    //if triplet wasn't pushed already
                    if (pairs.length == 0) {
                        pairs.push([num_a, num_b, num_c]);
                    }
                    if (
                        pairs[pairs.length - 1][0] != num_a ||
                        pairs[pairs.length - 1][1] != num_b ||
                        pairs[pairs.length - 1][2] != num_c
                    ) {
                        pairs.push([num_a, num_b, num_c]);
                    }
                }
            }
        }
    }

    console.log(pairs);
    return pairs;
}

/**
    [-4, -1, -1, 0, 1, 2]

    num_c = -(num_a + num_b)

    hashmap = {
        num_a: {
            num_c: num_b
        }
        -1: {
            2: -1,
            1: 0,
        }
    }


    for each num_a calculate num_c using num_b
    logic:: if (num_c in num_a) we already came across num_b so return the triplet
*/

function threeSum(nums) {
    nums.sort(function(num_a, num_b) {
        return num_a - num_b;
    });
    console.log(nums);

    solutionMap = {};
    complementMap = {};

    for (i = 0; i < nums.length - 2; i++) {
        num_a = nums[i];
        complementMap[num_a] = {};

        for (j = i + 1; j < nums.length; j++) {
            num_b = nums[j];
            console.log(complementMap);

            if (num_b in complementMap[num_a]) {
                // num_b is actually a num_c we already calculated
                num_c = num_b;
                num_b = complementMap[num_a][num_c];
                // if the solution array is empty or the the previous doesn't match
                if (
                    !solutionArray.length ||
                    solutionArray[solutionArray.length - 1][0] != num_a ||
                    solutionArray[solutionArray.length - 1][1] != num_b ||
                    solutionArray[solutionArray.length - 1][2] != num_c
                ) {
                    var possibleTriplet = [num_a, num_b, num_c];
                    console.log(`\t\tpossibleTriplet: ${possibleTriplet}`);
                    solutionArray.push(possibleTriplet);
                }
            } else {
                // num_b can be saved until we come across num_c
                num_c = -(num_a + num_b);
                complementMap[num_a][num_c] = num_b;
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

            // it("should return two different sets", function() {
            //     threeSum([
            //         -4,
            //         -2,
            //         -2,
            //         -2,
            //         0,
            //         1,
            //         2,
            //         2,
            //         2,
            //         3,
            //         3,
            //         4,
            //         4,
            //         6,
            //         6
            //     ]).should.eql([
            //         [-4, -2, 6],
            //         [-4, 0, 4],
            //         [-4, 1, 3],
            //         [-4, 2, 2],
            //         [-2, -2, 4],
            //         [-2, 0, 2]
            //     ]);
            // });
        });
    }); // end function
}); // end solution
