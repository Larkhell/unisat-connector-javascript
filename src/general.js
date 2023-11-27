const ApiClient = require('./ApiClient');

class General extends ApiClient {
    constructor(client) {
        super(client.baseUrl);
    }

    getBlockchainInfo() {
        return this.makeRequest('GET', '/v1/indexer/blockchain/info');
    }

    getBlockTransactions(height, cursor, size) {
        const params = `?cursor=${cursor}&size=${size}`;
        return this.makeRequest('GET', `/v1/indexer/block/${height}/txs${params}`);
    }

    getTxInfo(txid) {
        return this.makeRequest('GET', `/v1/indexer/tx/${txid}`);
    }

    getTxInputs(txid, cursor, size) {
        const params = `?cursor=${cursor}&size=${size}`;
        return this.makeRequest('GET', `/v1/indexer/tx/${txid}/ins${params}`);
    }

    getTxOutputs(txid, cursor, size) {
        const params = `?cursor=${cursor}&size=${size}`;
        return this.makeRequest('GET', `/v1/indexer/tx/${txid}/outs${params}`);
    }

    getAddressBalance(address) {
        return this.makeRequest('GET', `/v1/indexer/address/${address}/balance`);
    }

    getAddressHistory(address, cursor, size) {
        const params = `?cursor=${cursor}&size=${size}`;
        return this.makeRequest('GET', `/v1/indexer/address/${address}/history${params}`);
    }

    getBtcUtxo(address, cursor, size) {
        const params = `?cursor=${cursor}&size=${size}`;
        return this.makeRequest('GET', `/v1/indexer/address/${address}/utxo-data${params}`);
    }

    getInscriptionUtxo(address, cursor, size) {
        const params = `?cursor=${cursor}&size=${size}`;
        return this.makeRequest('GET', `/v1/indexer/address/${address}/inscription-utxo-data${params}`);
    }

    getInscriptionInfo(inscriptionId) {
        return this.makeRequest('GET', `/v1/indexer/inscription/info/${inscriptionId}`);
    }
}

module.exports = General;
