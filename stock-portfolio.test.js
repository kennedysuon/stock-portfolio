const StockPortfolio = require("./stock-portfolio.js");

describe("StockPortfolio", () => {
    test("2.1: portfolio with no shares and symbols", () => {
        const p = new StockPortfolio();
        expect(p.uniqueSymbolCount()).toBe(0);
    });

    test("2.2: portfolio is empty (or not)", ()=> {
        const p = new StockPortfolio();
        expect(p.isEmpty()).toBe(true);
    });

    test("2.3: make a purchase given a symbol and # of shares", () => {
        const p = new StockPortfolio();
        p.buy("VOO", 10);
        expect(p.sharesOf("VOO")).toBe(10);
    });

    test("2.4: make a sale given a symbol and # of shares", () => {
        const p = new StockPortfolio();
        p.buy("VOO", 10);
        p.sell("VOO",5);
        expect(p.sharesOf("VOO")).toBe(5);
    });

    test("2.5: count of unique ticker symbols", () => {
        const p = new StockPortfolio();
        p.buy("VOO", 10);
        p.buy("SCHD", 1000);
        p.buy("NVDA", 10);
        expect(p.uniqueSymbolCount()).toBe(3);
    });

    test("2.6: only keeps owned symbols", () => {
        const p = new StockPortfolio();
        p.buy("VOO", 10);
        p.buy("SCHD", 1000);
        p.buy("NVDA", 10);
        p.sell("NVDA",10);
        expect(p.uniqueSymbolCount()).toBe(2);

    });

    test("2.7: returns how many shares exist for a given symbol", () => {
        const p = new StockPortfolio();
        p.buy("VOO", 10);
        expect(p.sharesOf("VOO")).toBe(10);
        expect(p.sharesOf("NVDA")).toBe(0);
    });

    test("2.8: should not be possible to sell more shares than owned", () => {
        const p = new StockPortfolio();
        p.buy("VOO", 10);
        expect(() => p.sell("VOO", 11)).toThrow('Not possible to sell this number of shares.');
    });

});