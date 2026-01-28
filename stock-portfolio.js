class StockPortfolio{
    constructor() {
        this._holdings = new Map();
    }

    uniqueSymbolCount(){
        return this._holdings.size;
    }

    isEmpty(){
        return this._holdings.size === 0;
    }

    sharesOf(symbol){
        return this._holdings.get(symbol) ?? 0;
    }

    buy(symbol, shares){
        const curr = this._holdings.get(symbol) ?? 0;
        const next = curr + shares;
        this._holdings.set(symbol, next);
    }

    sell(symbol, shares){
        const curr = this._holdings.get(symbol) ?? 0;
        const remaining = curr - shares;

        if (shares > curr) {
            throw new Error('Not possible to sell this number of shares.');
        }

        if (remaining === 0) {
            this._holdings.delete(symbol);
        } else {
            this._holdings.set(symbol, remaining);
        }
    }
}

module.exports = StockPortfolio;