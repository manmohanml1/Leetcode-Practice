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

//Optimized/Two-pointer solution -> TC:O(n),SC:O(1)
export function maxProfit2(prices: number[]): number {
  if (prices.length < 2 || !prices) return 0;
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

//Brute force is also Dynamic Programming solution -> TC:O(n^2),SC:O(n^2)
function maxProfit3(prices: number[]): number {
  let ans = 0;
  let min = prices[0];
  //Can be either 1 or 0, but 0 already assigned initially so we can start from 1
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    ans = Math.max(ans, prices[i] - min);
  }
  return ans;
}
