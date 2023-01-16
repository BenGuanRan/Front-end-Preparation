/**
 * @param {string} s
 * @return {string[]}
 */

function ifIp(str) {
    const str_arr = str.split(".")
    return str_arr.every(i=>i[0]!=='0'&&i[0]!==undefined||i.length==1) && str_arr.map(i=>Number(i)).every(i=>i<=255)&&str_arr.length === 4
}

var restoreIpAddresses = function(s) {
    let res = []
    if(s.length < 4) return []
    for(let r = 2; r < s.length; r++) {
        for(let m=1; m<r; m++) {
            for(let l=0; l<m; l++) {
                let ipStr = s.slice(0, l+1)+'.'+s.slice(l+1, m+1)+'.'+s.slice(m+1, r+1)+'.'+s.slice(r+1, s.length)
                if(ifIp(ipStr))
                res.push(ipStr)
            }
        }
    }
    return res
    
};

console.log(restoreIpAddresses('0000'));