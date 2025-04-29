/**
 * @param {number[]} prices
 * @return {number}
 */
//prices : [7,6,4,3,1] || [7,1,5,3,6,4]
var maxProfit = function(prices) {
  let profit = 0;
  let shares = {}

  for(let i = 0; i < prices.length; i++) { 
    for(let j = i+1; j < prices.length; j++) {
        let currentProfit = prices[j] - prices[i];  
        if(currentProfit > profit) {               
            profit = currentProfit;
            shares.buy = i;
            shares.sell = j;
        }
    }
  }
  if(shares.buy == undefined || shares.sell == undefined) {
    return 'No profit, not a good time for profit'
  } else {
    return `Profit is: ${profit}, good time to buy: ${shares.buy} sell: ${shares.sell}`
  }
};

console.log(maxProfit([7,6,4,3,1]))
console.log(maxProfit([7,1,5,3,6,4]))