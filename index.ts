
import { Stock, Transanction } from './classes'


async function readSku(sku:string) {

    const trans = new Transanction();
    const stocks =  new Stock();

   let [stock, transaction ] =  await Promise.all([ stocks.readStocks(sku), trans.readTransactions(sku) ]);

   return {
       sku: stock.sku,
       qty: transaction.qty
   }
}

readSku('HGG795032/35/91').then(result => console.log(result))