import StockDto from "../dto/stock.dto";
import { readFileSync } from 'fs';

export class Stock{

     readStocks(sku: string): Promise<StockDto>{
        return new Promise( (resolve, reject) => {
            const stocks: StockDto[] = JSON.parse(readFileSync('./stock.json','utf-8'));
            const stockItem = stocks.find( (item: StockDto) => item.sku ===  sku )
            if(stockItem){
                resolve(stockItem);
            }
            reject();
        })
    
    }
    
}