const h = [1, 2, 4, 3]

var maxArea = function (h) {
    let s = 0, e = h.length - 1, area = 0
    let b = e - s
    let maxArea = Math.min(h[s], h[e]) * b
    while (b) {
        if (h[s] > h[e]) {

            e--
        }

        else {
            area = Math.min(h[s], h[e]) * b
            s++
        }
        b = e - s
        if (maxArea < area) {
            maxArea = area
        }

    }
    return maxArea
};

console.log(maxArea(h));
