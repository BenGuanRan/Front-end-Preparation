
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var numTrees = function(n) {
    let dp = new Array(n+1).fill(0)
    dp[0] = 1
    dp[1] = 1
    for(let i=2;i<=n;i++) {
        for(let j=1;j<=i;j++) {
            dp[i]+=dp[j-1]*dp[i-j]
        }
    }
    return dp[n]
  
  };
  