/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (!x)
        return x
    for (let i = 1; i <= x+1; i++) {
        if (i * i > x) {
            return i - 1
        }
    }
};