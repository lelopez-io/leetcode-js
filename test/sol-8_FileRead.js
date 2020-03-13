var should = require("should");
var fs = require("fs");

/** DESCRIPTION
 * Given an file path read the contents and return true if the file has text
 *
 */

function fileRead(filePath) {
    var blob_txt = "";

    try {
        // read the contents of blob.txt into the var blob_txt
        blob_txt = fs.readFileSync(filePath, "utf8");
    } catch (e) {
        console.log("couldn't read file: ");
        return false;
    }

    // there should be content so not equal to the original empty string
    return blob_txt != "";
}

/* [Solution-Number_Type] */
describe("sol-8_fileRead", function() {
    /* [Test Function] */
    describe("#fileRead()", function() {
        context("name to valid text file", function() {
            it("should return true if text is found", function() {
                fileRead("./artifacts/blob.txt").should.eql(true);
            });
        });

        context("name to invalid text file", function() {
            it("should return true if text is found", function() {
                fileRead("./artifacts/blob_2.txt").should.eql(true);
            });
        });
    }); // end function
}); // end solution
