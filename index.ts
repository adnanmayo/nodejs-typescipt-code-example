import { readFileSync } from 'fs';

interface Stock {
    sku: string,
    stock: string
}

interface Transanction {

    sku: string ,
    type: string,
    qty: number

}



async function readSku(sku:string) {

   let [stock, transaction ] =  await Promise.all([ readStocks(sku), readTransactions(sku) ]);

   return {
       sku: stock.sku,
       qty: transaction.qty
   }
}

function readStocks(sku: string): Promise<Stock>{

    return new Promise( (resolve, reject) => {
        const stocks: Stock[] = JSON.parse(readFileSync('./stock.json','utf-8'));
        const stockItem = stocks.find( (item: Stock) => item.sku ===  sku )
        if(stockItem){
            resolve(stockItem);
        }
        reject();
    })

}

function readTransactions(sku: string): Promise<Transanction>{

    return new Promise( (resolve, reject) => {
        const transactions: Transanction[] = JSON.parse(readFileSync('./transactions.json','utf-8'));
        const trasanctionItem = transactions.find( (item: Transanction) => item.sku ===  sku )
        if(trasanctionItem){
            resolve(trasanctionItem);
        }
        reject();
    })

}

readSku('HGG795032/35/91').then(result => console.log(result))