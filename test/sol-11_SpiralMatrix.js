var should = require("should");

function spiralOrder(matrix) {
    // Assuming the matrix is (m x n) then we need to find how many rows and
    // how many columns it has.
    // Once we know the rows and coluns then we use that to access the different
    // elements
    //
    // 0,  1,  2, 3
    // 9, 10, 11, 4
    // 8,  7,  6, 5
    //
    // sub from width @ bottom-right & top-left
    // sub from height @ top-right & bottom-left
    //
    // direction_flag = 'R'; // 'D', 'L', 'U'
    //
    // height_count = n;
    // width_count = m;

    if (!matrix.length) return [];

    let y_indexes = [0, matrix.length - 1];
    let x_indexes = [0, matrix[0].length - 1];
    let direction_flag = "R";

    let number_count = matrix.length * matrix[0].length;

    let solution = [];

    // [1] first check num_count
    while (number_count > 0) {
        // [2] if check passes do this.

        // console.log(y_indexes);
        // console.log(x_indexes);

        if (direction_flag == "R" && number_count > 0) {
            let j = y_indexes[0];
            for (i = x_indexes[0]; i <= x_indexes[1]; i++) {
                console.log(matrix[j][i]);
                solution.push(matrix[j][i]);
                number_count--;
            }
            direction_flag = "D";
            y_indexes[0]++;
        }

        if (direction_flag == "D" && number_count > 0) {
            let i = x_indexes[1];
            for (j = y_indexes[0]; j <= y_indexes[1]; j++) {
                console.log(matrix[j][i]);
                solution.push(matrix[j][i]);
                number_count--;
            }
            direction_flag = "L";
            x_indexes[1]--;
        }

        // Left Side
        if (direction_flag == "L" && number_count > 0) {
            let j = y_indexes[1];
            for (i = x_indexes[1]; i >= x_indexes[0]; i--) {
                console.log(matrix[j][i]);
                solution.push(matrix[j][i]);
                number_count--;
            }
            direction_flag = "U";
            y_indexes[1]--;
        }

        // Up Side
        if (direction_flag == "U" && number_count > 0) {
            let i = x_indexes[0];
            for (j = y_indexes[1]; j >= y_indexes[0]; j--) {
                console.log(matrix[j][i]);
                solution.push(matrix[j][i]);
                number_count--;
            }
            direction_flag = "R";
            x_indexes[0]++;
        }

        // [3] sub from num_count
    } // [4] jump up to [1]

    return solution;
}

/* [Solution-Number_Type] */
describe("sol-11_SprialMatrix", function() {
    /* [Test Function] */
    describe("#spiralOrder()", function() {
        context("input is an (m x n) matrix ", function() {
            it("should return all elements in spiral order", function() {
                spiralOrder([
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9]
                ]).should.eql([1, 2, 3, 6, 9, 8, 7, 4, 5]);
            });

            it("should return all elements in spiral order", function() {
                spiralOrder([
                    [1, 2, 3, 4],
                    [5, 6, 7, 8],
                    [9, 10, 11, 12]
                ]).should.eql([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
            });
        });
    }); // end function
}); // end solution
