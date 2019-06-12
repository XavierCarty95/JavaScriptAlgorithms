function maxStockProfit(pricesArr){
    var maxStockProfit = -1; 
    var buyPrice = 0; 
    var sellPrice = 0; 
  
   changeBuyPrice = true; 

    for(var i = 0; i < pricesArr.length; i++){
      if(changeBuyPrice) buyPrice = pricesArr[i];
      sellPrice = pricesArr[i + 1]; 
     
      if (sellPrice < buyPrice){
        changeBuyPrice = true; 

      }
      else {  
        var tempProfit = sellPrice - buyPrice;
        if(tempProfit > maxStockProfit) maxStockProfit = tempProfit;
        changeBuyPrice = false; 

      }
    }
    return maxStockProfit;
}
maxStockProfit([32,46,38,40,48,42])
