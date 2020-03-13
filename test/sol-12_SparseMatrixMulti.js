var should = require("should");

function multiply(A, B) {
    let solution = [];

    let n_A = A.length;
    let n_B = B.length;
    let m_B = B[0].length;

    for (row_A = 0; row_A < n_A; row_A++) {
        let tempRow = [];
        for (col_B = 0; col_B < m_B; col_B++) {
            let tempSum = 0;
            for (row_B = 0; row_B < n_B; row_B++) {
                try {
                    // console.log(`${A[row_A][row_B]} * ${B[row_B][col_B]}`);
                    tempSum += A[row_A][row_B] * B[row_B][col_B];
                } catch {
                    console.log("failed to multi");
                }
            }
            console.log("--END COLUMN--");
            //console.log(tempSum);
            tempRow.push(tempSum);
        }
        console.log("--END ROW--");
        //console.log("tempRow: ", tempRow);
        solution.push(tempRow);
    }

    return solution;
}

/* [Solution-Number_Type] */
describe("sol-12_SparseMatrixMultiplication", function() {
    /* [Test Function] */
    describe("#multiply()", function() {
        context("input is are (m x n) and (n x m) matrices ", function() {
            it("Given A and B return AB", function() {
                multiply(
                    [
                        [1, 0, 0],
                        [-1, 0, 3]
                    ],
                    [
                        [7, 0, 0],
                        [0, 0, 0],
                        [0, 0, 1]
                    ]
                ).should.eql([
                    [7, 0, 0],
                    [-7, 0, 3]
                ]);
            });

            it("Given A and B return AB", function() {
                multiply([[1, -5]], [[12], [-1]]).should.eql([[17]]);
            });
        });
    }); // end function
}); // end solution
