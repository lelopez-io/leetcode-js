var should = require("should");


/* [Solution-Number_Type] */
describe("sol-0_Array", function() {


    /* [Test Function] */
    describe("#indexOf()", function() {

      context("value is not present", function () {
        it("should return -1", function() {
          [1, 2, 3].indexOf(5).should.equal(-1);
        });
      });

    }); // end function


}); // end solution
