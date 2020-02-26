var should = require("should");

/** DESCRIPTION
 * Given an file path read the contents and return true if the file has text
 *
 */

function fileRead(filePath) {
    let blob_txt = "";
    // read the contents of blob.txt into the var blob_txt

    // there should be content so not equal to the original empty string
    return blob_txt != "";
}

/* [Solution-Number_Type] */
describe("sol-8_fileRead", function() {
    /* [Test Function] */
    describe("#fileRead()", function() {
        context("name to valid text file", function() {
            it("should return true if text is found", function() {
                fileRead("../artifacts/blob.txt").should.eql(true);
            });
        });
    }); // end function
}); // end solution
