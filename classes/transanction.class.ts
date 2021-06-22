import TransanctionDto from "../dto/transanction.dto";
import { readFileSync } from 'fs';

export class Transanction{

     readTransactions(sku: string): Promise<TransanctionDto>{

        return new Promise( (resolve, reject) => {
            const transactions: TransanctionDto[] = JSON.parse(readFileSync('./transactions.json','utf-8'));
            const trasanctionItem = transactions.find( (item: TransanctionDto) => item.sku ===  sku )
            if(trasanctionItem){
                resolve(trasanctionItem);
            }
            reject();
        })
    
    }
}