// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

const longestCommonPrefix = (arr) => {
    let prefix = ''
    let newSplice = arr.splice(0, 2)
    let check = ''
    let final = ''
    if (newSplice.length <= 1) {
        final = newSplice.join('')
        return final
    }
// If the array is 1 or less we are finished
    else {
        if (newSplice[0][0] != newSplice[1][0]) {
            return "None";
        }
// If we reach this check the array has 2 words in it. If the first letters don't match then their will be no common prefixs
        for (letter = 0; newSplice[0][letter]; letter++) {
            check = newSplice[0][letter]
            if (check != newSplice[1][letter]){
                arr.unshift(prefix)
                return longestCommonPrefix(arr)
            }
            else if (check == newSplice[1][letter]) {
                prefix += check
            }
// We go through the 2 words letter by letter checking them, if at anypoint the letter don't match we add the prefix the the spliced arr and do the funtcion again
        }
        arr.unshift(prefix)
        return longestCommonPrefix(arr)
// We add the prefix var to the front of the arr that was spliced (We removed the first 2 indexs to check) and we rerun the function with the new smaller arr to use the prefix as the word to be checked against
    }
}


let t1 = ["flower", "flow", "flight"];
let t2 = ["dog", "racecar", "car"];
let t3 = ["cir","car"]

console.log(longestCommonPrefix(t1));
console.log(longestCommonPrefix(t2));
console.log(longestCommonPrefix(t3));