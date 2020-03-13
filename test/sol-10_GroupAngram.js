var should = require("should");

function groupAnagram(strs) {
    let map = {};
    let counter = 0;
    let results = [];
    for (let i = 0; i < strs.length; i++) {
        let key = strs[i]
            .split("")
            .sort()
            .join("");
        if (map[key] !== undefined) {
            results[map[key]].push(strs[i]);
        } else {
            map[key] = counter;
            results.push([strs[i]]);
            counter++;
        }
    }
    return results;
}

/* [Solution-Number_Type] */
describe("sol-10_groupAnagram", function() {
    /* [Test Function] */
    describe("#groupAnagram()", function() {
        context("valid inputs", function() {
            it("should return arrary of arrays", function() {
                groupAnagram([
                    "ate",
                    "eat",
                    "tea",
                    "nat",
                    "tan",
                    "bat"
                ]).should.eql([["ate", "eat", "tea"], ["nat", "tan"], ["bat"]]);
            });
        });
    }); // end function
}); // end solution

// TRY 1. To much sorting made it to slow
// function sortString(str) {
//     var arr = str.split("");
//     var tmp;
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//             /* if ASCII code greater then swap the elements position*/
//             if (arr[i] > arr[j]) {
//                 tmp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = tmp;
//             }
//         }
//     }
//     return arr.join("");
// }

// function groupAnagram(words) {
//     let solution;

//     let dictionary = {};

//     for (index = 0; index < words.length; index++) {
//         let tempSortedString = sortString(words[index]);
//         console.log(tempSortedString);

//         if (tempSortedString in dictionary) {
//             dictionary[tempSortedString] = [
//                 ...dictionary[tempSortedString],
//                 words[index]
//             ];
//         } else {
//             dictionary[tempSortedString] = [words[index]];
//         }
//     }

//     //console.log(dictionary);
//     solution = Object.values(dictionary);
//     solution.forEach(subArray => {
//         subArray.sort();
//     });

//     return solution;
// }
