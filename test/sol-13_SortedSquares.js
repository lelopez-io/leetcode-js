var should = require("should");

/**
 * Given an array of integers A sorted in non-decreasing order
 * return an array of the squares of each number, also in sorted non-decreasing order.
 *
 * @param {number[]} A
 * @return {number[]}
 */
function sortedSquares(A) {
    let solution = [];

    // Sorting takes O(n^2)

    // for loop 0(n)
    // for loop 0(n)
    //-> O(2n) < 0(n^2)

    // for loop 0(n)
    // for loop 0(n)
    // for loop 0(n)
    //-> 0(3n) < 0(n^2)

    //[1. ] figure out where the leftSideStarts and rightSideStart
    //  left side is negatives
    //  right side is positives

    let leftSideStarts = -1;
    let rightSideStarts = A.length;

    for (i = 0; i < A.length; i++) {
        if (A[i] >= 0) {
            rightSideStarts = i;
            leftSideStarts = i - 1;
            break;
        }
        leftSideStarts = i;
    }

    //[2. ] next check the negative and positive and see which is smaller
    //  since the maginitude of the number in the middle are most likely smaller
    //  we count out from the middle on both sides.

    //while leftSideStarts >= -1; //check leftside
    //while rightSideStart < A.length; //check rightside

    let leftSquared = -1;
    let rightSquared = -1;

    while (solution.length < A.length) {
        leftSquared = -1;
        rightSquared = -1;

        // if no negative numbers left, push the rightside
        if (leftSideStarts == -1) {
            solution.push(A[rightSideStarts] ** 2);
            rightSideStarts++;
            continue;
        }

        // if no positive numbers left, push the leftside
        if (rightSideStarts == A.length) {
            solution.push(A[leftSideStarts] ** 2);
            leftSideStarts--;
            continue;
        }

        //// there are still numbers left find the squared value if able to
        if (leftSideStarts > -1) {
            leftSquared = A[leftSideStarts] ** 2;
        }

        if (rightSideStarts < A.length) {
            rightSquared = A[rightSideStarts] ** 2;
        }

        if (leftSquared < rightSquared) {
            //console.log(`L:${leftSquared} < R:${rightSquared}`);
            leftSideStarts--;
            solution.push(leftSquared);
        } else if (rightSquared < leftSquared) {
            //console.log(`R:${rightSquared} < L:${leftSquared}`);
            rightSideStarts++;
            solution.push(rightSquared);
        } else {
            //console.log(`L:${leftSquared} == R:${rightSquared}`);
            leftSideStarts--;
            rightSideStarts++;
            solution.push(rightSquared);
            solution.push(leftSquared);
        }
    }

    return solution;
}

/* [Solution-Number_Type] */
describe("sol-13_SortedSquares", function() {
    /* [Test Function] */
    describe("#sortedSquares()", function() {
        context(
            "Given an array of integers A sorted in non-decreasing order",
            function() {
                it("should return an array of the squares of each number, also in sorted non-decreasing order.", function() {
                    sortedSquares([-4, -1, 0, 3, 10]).should.eql([
                        0,
                        1,
                        9,
                        16,
                        100
                    ]);
                });

                it("should return an array of the squares of each number, also in sorted non-decreasing order.", function() {
                    sortedSquares([-7, -3, 2, 3, 11]).should.eql([
                        4,
                        9,
                        9,
                        49,
                        121
                    ]);
                });

                it("should return an array of the squares of each number, also in sorted non-decreasing order.", function() {
                    sortedSquares([-1]).should.eql([1]);
                });

                it("should return an array of the squares of each number, also in sorted non-decreasing order.", function() {
                    sortedSquares([-1, 1]).should.eql([1, 1]);
                });

                it("should return an array of the squares of each number, also in sorted non-decreasing order.", function() {
                    sortedSquares([-2, 0]).should.eql([0, 4]);
                });
            }
        );
    }); // end function
}); // end solution
