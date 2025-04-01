function maxProfit(prices: number[]): number {
  if (prices.length === 1) return 0;
  if (prices.length === 2)
    return prices[1] - prices[0] > 0 ? prices[1] - prices[0] : 0;
  let left = 0;
  let right = 1;
  let max_profit = 0;
  while (right < prices.length) {
    if (prices[right] - prices[left] < 0) {
      left++;
    } else if (left < right && max_profit < prices[right] - prices[left]) {
      max_profit = prices[right] - prices[left];
    } else {
      right++;
    }
  }
  return max_profit;
}

function maxProfit1(prices: number[]): number {
  if (prices.length === 1) return 0;
  let left = 0;
  let right = 1;
  let max_profit = 0;
  while (right < prices.length) {
    if (prices[right] - prices[left] < 0) {
      left++;
    } else if (left < right && max_profit < prices[right] - prices[left]) {
      max_profit = prices[right] - prices[left];
    } else {
      right++;
    }
  }
  return max_profit;
}

export function maxProfit2(prices: number[]): number {
  if (prices.length === 1) return 0;
  let left = 0;
  let right = 1;
  let max_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
}

//Brute force -> TC:O(n^2),SC:O(n^2)
function maxProfit3(prices: number[]): number {
  let ans = 0;
  for (let i = 0; i < prices.length; i++) {
    let buy = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      let sell = prices[j];
      ans = Math.max(ans, sell - buy);
    }
  }
  return ans;
}
