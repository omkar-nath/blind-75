// Time complexity: O(n^2) 
function optimalStockTradingUnOptimized(prices:number[]):number {
    let maxProfit=Number.MIN_SAFE_INTEGER;

    for(let i=0;i<prices.length;i++){
        for(let j=i+1;j<prices.length;j++){
            maxProfit=Math.max(maxProfit,(prices[j]-prices[i]));
        }
    }
    return maxProfit;
}

// Test cases

const input1=[1,2,3,4];

console.log(optimalStockTradingUnOptimized(input1));

const input2=[6,8,1,2,30,19];

console.log(optimalStockTradingUnOptimized(input2));

//Time complexity: O(n)

function optimalStockTradingOptimized(prices:number[]):number {
    let maxProfit=0;
    let lowestBuyingPrice = Number.MAX_SAFE_INTEGER;

    for(let i=0;i<prices.length;i++){
        lowestBuyingPrice=Math.min(lowestBuyingPrice,prices[i]);

        maxProfit=Math.max(maxProfit,prices[i]-lowestBuyingPrice);
    }

    return maxProfit;

}

// Test cases for optimized version

const input3=[6,8,1,2,30,19];

console.log(optimalStockTradingOptimized(input3));
