var should = require("should");

/** DESCRIPTION
 * Given a string containing just the characters '(', ')', '{', '}', '[', ']',
 * determin if the input string is valid.
 *
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 *
 * Note: that an empty string is also considered valid
 */

function isValid(s) {
    if (s.length == 0) return true;
    if (s.length % 2 != 0) return false;

    pairMap = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    pairStack = [];

    for (i = 0; i < s.length; i++) {
        if (pairStack.length == 0) {
            pairStack.push(s[i]);
            continue;
        }

        var currentChar = s[i];
        var currentComp = pairMap[currentChar];
        var top = pairStack[pairStack.length - 1];

        if (currentComp && currentComp == top) {
            pairStack.pop();
        } else {
            pairStack.push(currentChar);
        }
    }

    return !pairStack.length;
}

/** EX. 2
 * switch statement similar to hashmap except for when we get the closing braces
 * since the closing braces are the last statment, we always get 0(n) complexity
 * when we are evaulation how to handle them.
 
    var isValid = function(s) {   
        const stack = [];
        
        for (let i = 0 ; i < s.length ; i++) {
            let c = s.charAt(i);
            switch(c) {
                case '(': stack.push(')');
                    break;
                case '[': stack.push(']');
                    break;
                case '{': stack.push('}');
                    break;
                default:
                    if (c !== stack.pop()) {
                        return false;
                    }
            }
        }
        
        return stack.length === 0;
    };
 */

/** EX. 1 
  * To slow since string replace has to search for the matching pair after every
  * edit to the string. Search maybe O(n) while the outer for loop itself is 
  * also 0(n) making the entire thing 0(n^2)

    function isValid(s) {
        const originalLength = s.length;

        for (i = 0; i < originalLength / 2; i++) {
            s = s.replace("[]", "");
            s = s.replace("{}", "");
            s = s.replace("()", "");
        }

        return !s.length;
    }
  */

/* [Solution-Number_Type] */
describe("sol-5_Parentheses", function() {
    /* [Test Function] */
    describe("#isValid()", function() {
        context("with empty string argument", function() {
            it("should return: true", function() {
                isValid("").should.eql(true);
            });
        });

        context("with odd string argument", function() {
            it("should return: false", function() {
                isValid("{()").should.eql(false);
            });
        });

        context("with even balanced string argument", function() {
            it("should return: true", function() {
                isValid("()").should.eql(true);
            });

            it("should return: true", function() {
                isValid("()[]{}").should.eql(true);
            });

            it("should return: true", function() {
                isValid("{[]}").should.eql(true);
            });

            it("should return: false", function() {
                isValid("{[}]").should.eql(false);
            });

            it("should return: false", function() {
                isValid("(}{)").should.eql(false);
            });

            it("should return: false", function() {
                isValid("][").should.eql(false);
            });
        });

        context("with even unbalanced string argument", function() {
            it("should return: false", function() {
                isValid("(]").should.eql(false);
            });

            it("should return: false", function() {
                isValid("([)]").should.eql(false);
            });
        });
    }); // end function
}); // end solution
