const ApiClient = require('./ApiClient');

class BRC20 extends ApiClient {
    constructor(client) {
        super(client.baseUrl);
    }

    getBestBlockHeight() {
        return this.makeRequest('GET', '/v1/indexer/brc20/bestheight');
    }

    getBrc20List(start, limit) {
        const params = `?start=${start}&limit=${limit}`;
        return this.makeRequest('GET', `/v1/indexer/brc20/list${params}`);
    }

    getBrc20Info(ticker) {
        return this.makeRequest('GET', `/v1/indexer/brc20/${ticker}/info`);
    }

    getBrc20Holders(ticker, start, limit) {
        const params = `?start=${start}&limit=${limit}`;
        return this.makeRequest('GET', `/v1/indexer/brc20/${ticker}/holders${params}`);
    }

    getBrc20History(ticker, type_, height, start, limit) {
        const params = `?type=${type_}&height=${height}&start=${start}&limit=${limit}`;
        return this.makeRequest('GET', `/v1/indexer/brc20/${ticker}/history${params}`);
    }

    getBrc20TxHistory(ticker, txid, type_, start, limit) {
        const params = `?type=${type_}&start=${start}&limit=${limit}`;
        return this.makeRequest('GET', `/v1/indexer/brc20/${ticker}/tx/${txid}/history${params}`);
    }

    getAddressBrc20Summary(address, start, limit) {
        const params = `?start=${start}&limit=${limit}`;
        return this.makeRequest('GET', `/v1/indexer/address/${address}/brc20/summary${params}`);
    }

    getAddressBrc20TickerInfo(address, ticker) {
        return this.makeRequest('GET', `/v1/indexer/address/${address}/brc20/${ticker}/info`);
    }

    getAddressBrc20History(address, ticker, type_, start, limit) {
        const params = `?type=${type_}&start=${start}&limit=${limit}`;
        return this.makeRequest('GET', `/v1/indexer/address/${address}/brc20/${ticker}/history${params}`);
    }

    getTransferableInscription(address, ticker, start, limit) {
        const params = `?start=${start}&limit=${limit}`;
        return this.makeRequest('GET', `/v1/indexer/address/${address}/brc20/${ticker}/transferable-inscriptions${params}`);
    }
}

module.exports = BRC20;