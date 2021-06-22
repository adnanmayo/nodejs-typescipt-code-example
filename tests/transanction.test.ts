import {Transanction} from "../classes";
import TransanctionDto from "../dto/transanction.dto";

describe('test transaction function', ()=>{

    it('should  be defined', ()=>{
        const trans  = new Transanction()
        expect(trans.readTransactions('HGG795032/35/91')).resolves.toBeDefined();
    })

    it('should return existing values', ()=>{
        const trans  = new Transanction()
        expect(trans.readTransactions('HGG795032/35/91')).resolves.toBeInstanceOf(
            {
                "sku": "HGG795032/35/91",
                "type": "order",
                "qty": 7
            }
        );
    })
});