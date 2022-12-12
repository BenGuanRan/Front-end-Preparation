let calPoints = function(ops) {
    let res = [];
    for(let i = 0; i < ops.length; i++){
        switch(ops[i]){
            case "C":
                res.pop();
                break;
            case "D":
                res.push(+res[res.length - 1] * 2);
                break;
            case "+":
                res.push(+res[res.length - 1] + +res[res.length - 2]);
                break;
            default:
                res.push(+ops[i]);
        }
    }
    return res.reduce((i, j) => i + j, 0);
};