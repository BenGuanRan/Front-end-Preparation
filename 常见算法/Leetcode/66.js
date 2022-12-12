/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    const l = digits.length
    digits[l - 1] += 1
    for (let i = l - 1; i > 0; i--) {
        if (digits[i]  >= 10) {
            digits[i] = 0
            digits[i - 1] += 1
        } else {
            break
        }
    }
    if (digits[0] >= 10) {
        digits[0] = 0
        digits.unshift(1)
    }
    return digits
};

// console.log(plusOne([9,8,9]));