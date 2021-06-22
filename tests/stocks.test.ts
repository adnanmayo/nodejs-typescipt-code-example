import {Stock} from "../classes";

describe('test transaction function', () => {

    it('should  be defined', () => {
        const trans = new Stock()
        expect(trans.readStocks('HGG795032/35/91')).resolves.toBeDefined();
    })

    it('should return existing values', () => {
        const trans = new Stock()
        expect(trans.readStocks('HGG795032/35/91')).resolves.toBeInstanceOf(
            {
                "sku": "HGG795032/35/91",
                "stock": 4009
            }
        );
    })
});