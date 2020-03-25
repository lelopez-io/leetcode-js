var should = require("should");

/**
 * Given n non-negative integers representing an elevation map where the width
 * of each bar is 1, compute how much water it is able to trap after raining.
 *
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
    let solution = 0;
    var leftWall, rightWall;
    var start, end, wallSegs, shortWall, elevation;

    for (i = 0; i < height.length; i++) {
        elevation = height[i];

        //Find the left wall, save the index of left wall and start adding the
        // height until you find a right wall that is same height or higher than
        // the left wall. Then, find the difference of indices, multiply it by the
        //height of the shortest wall and subtract the elevations
        if (elevation > 0 && !rightWall && !leftWall) {
            leftWall = true;
            start = i;
            shortWall = elevation;
            wallSegs += elevation;
        } else if (
            elevation > 0 &&
            leftwall &&
            !rightWall &&
            elevation >= shortWall
        ) {
            rightWall = true;
            end = i;
            if (elevation < shortWall) {
                shortWall = elevation;
            }
        }

        if (leftWall && rightWall) {
            water = (end - start) * shortWall - wallSegs;
            rightWall = false;
            start = i;
            end = i;
            shortWall = elevation;
            wallSegs = 0;
        }
    }

    return water;
}

function trapLuis(height) {
    let solution = 0;
    let leftWallIndex = 0,
        currentElevation = 0,
        middleTrap = 0,
        negativeElevation = 0,
        tempWater = 0;

    for (let i = 0; i < height.length; i++) {
        currentElevation = height[i];

        if (currentElevation == 0) {
            continue;
            // nothing to do when no elevation
        }

        console.log("currentElevation: ", currentElevation);

        if (leftWallIndex == 0) {
            leftWallIndex = i;
            continue;
        }

        console.log("\tleftWallIndex: ", leftWallIndex);
        console.log("\tleftWallHeight: ", height[leftWallIndex]);

        // IF RIGHTWALL IS BIGGER
        // check if leftWall is still leftWall
        if (currentElevation >= leftWallIndex) {
            console.log("\trightWall can trap.");
            //trap anything between and move the leftWall

            middleTrap = i - leftWallIndex - 1;
            if (middleTrap > 0) {
                tempWater =
                    height[leftWallIndex] * middleTrap - negativeElevation;
                solution += tempWater;
                console.log("\ttempWater: ", tempWater);
                console.log("\tsolultion: ", solution);
            }
            leftWallIndex = i;
            negativeElevation = 0;
            continue;
            // move on to the next
        }

        // IF LEFTWALL IS BIGGER
        // see if it's even possible to trap
        middleTrap = i - leftWallIndex - 1;
        if (middleTrap <= 0) {
            console.log("\tunable to trap.");
            negativeElevation += currentElevation;
            console.log("\tnegativeElevation: ", negativeElevation);
            continue;
            // just add the current segment since we can't trap
        }

        tempWater = currentElevation * middleTrap - negativeElevation;

        if (tempWater > 0) {
            console.log("\tsmallRightWall can trap.");
            console.log("\ttempWater: ", tempWater);
            console.log("\tnegativeElevation: ", negativeElevation);
            solution += tempWater;
            negativeElevation += tempWater;
        }

        negativeElevation += currentElevation;

        console.log("\tsolultion: ", solution);
    }

    return solution;
}

/* [Solution-Number_Type] */
describe("sol-14_TrappingRainWater", function() {
    /* [Test Function] */
    describe("#trap(height)", function() {
        context("Given an array of integers `height`", function() {
            it("should return an integer of the amount of water it can trap", function() {
                trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]).should.equal(6);
            });
        });
    }); // end function
}); // end solution
