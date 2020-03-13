// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

//--------------
// while num >= 1000
// return "M" if able to subtract 1000

// if num >= 900
// return "CM" && sub 900

// if num >= 500
// return "D" && sub 500

// if num >= 400
// return "CD" && sub 400

//--------------
// while num >= 100
// return "C" && sub 100

// if num >= 90
// return "XC" && sub 90

// if num >= 50
// return "L" && sub 50

// if num >= 40
// return "XL" && sub 40

//--------------
// while num >= 10
// return "X" && sub 10

// if num >= 9
// return "IX" && sub 9

// if num >= 5
// return "V" && sub 5

// if num >= 4
// return "IV" && sub 4

//--------------
// while num >= 1
// return "I" && sub 1

var should = require("should");

function intToRoman(num) {
    let sol = "";

    let case1xxx = 1000;
    let case9xx = 900;
    let case5xx = 500;
    let case4xx = 400;

    let romanMap = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I"
    };

    while (num > 0) {
        if (num >= case1xxx) {
            sol += romanMap[case1xxx];
            num -= case1xxx;
            continue;
        }

        if (num >= case9xx) {
            sol += romanMap[case9xx];
            num -= case9xx;
        }

        if (num >= case5xx) {
            sol += romanMap[case5xx];
            num -= case5xx;
        }

        if (num >= case4xx) {
            sol += romanMap[case4xx];
            num -= case4xx;
        }

        case1xxx /= 10;
        case9xx /= 10;
        case5xx /= 10;
        case4xx /= 10;
    }

    // should be string
    return sol;
}

/* [Solution-Number_Type] */
describe("sol-9_intToRoman", function() {
    /* [Test Function] */
    describe("#intToRoman()", function() {
        context("valid number 1 - 3999", function() {
            it("2: should return: II", function() {
                intToRoman(2).should.eql("II");
            });

            it("3: should return: III", function() {
                intToRoman(3).should.eql("III");
            });

            it("9: should return: IX", function() {
                intToRoman(9).should.eql("IX");
            });

            it("58: should return: LVIII", function() {
                intToRoman(58).should.eql("LVIII");
            });

            it("1994: should return: MCMXCIV", function() {
                intToRoman(1994).should.eql("MCMXCIV");
            });
        });
    }); // end function
}); // end solution
