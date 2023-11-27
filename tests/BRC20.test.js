const BRC20 = require('../src/BRC20');

describe('BRC20', () => {
    const baseUrl = 'https://open-api.unisat.io';
    const token = 'your_token_api';
    const brc20 = new BRC20({ baseUrl, token });

    test('getBestBlockHeight', async () => {
        await expect(brc20.getBestBlockHeight()).resolves.toBeDefined();
    });

    test('getBrc20List', async () => {
        const start = 0;
        const limit = 10;
        await expect(brc20.getBrc20List(start, limit)).resolves.toBeDefined();
    });

    test('getBrc20Info', async () => {
        const ticker = 'SATS';
        await expect(brc20.getBrc20Info(ticker)).resolves.toBeDefined();
    });

    test('getBrc20Holders', async () => {
        const ticker = 'SATS'; 
        const start = 0;
        const limit = 10;
        await expect(brc20.getBrc20Holders(ticker, start, limit)).resolves.toBeDefined();
    });

    test('getBrc20History', async () => {
        const ticker = 'SATS'; 
        const type_ = 'transfer'; 
        const height = 1000; // Hauteur de bloc exemple
        const start = 0;
        const limit = 10;
        await expect(brc20.getBrc20History(ticker, type_, height, start, limit)).resolves.toBeDefined();
    });

    test('getBrc20TxHistory', async () => {
        const ticker = 'SATS'; 
        const txid = '51f76b673990feceda6b1ef886867165c1ccd0d0e3c2482c6fcc77b2741b04c5'; // Remplacez par un txid valide
        const type_ = 'transfer'; 
        const start = 0;
        const limit = 10;
        await expect(brc20.getBrc20TxHistory(ticker, txid, type_, start, limit)).resolves.toBeDefined();
    });

    test('getAddressBrc20Summary', async () => {
        const address = 'bc1p55kw8qwk89fv2py9ddc2ae5q5d3z70d4sdtepl8625vgwyp4edgq005hqu'; 
        const start = 0;
        const limit = 10;
        await expect(brc20.getAddressBrc20Summary(address, start, limit)).resolves.toBeDefined();
    });

    test('getAddressBrc20TickerInfo', async () => {
        const address = 'bc1p55kw8qwk89fv2py9ddc2ae5q5d3z70d4sdtepl8625vgwyp4edgq005hqu'; 
        const ticker = 'SATS'; 
        await expect(brc20.getAddressBrc20TickerInfo(address, ticker)).resolves.toBeDefined();
    });

    test('getAddressBrc20History', async () => {
        const address = 'bc1p55kw8qwk89fv2py9ddc2ae5q5d3z70d4sdtepl8625vgwyp4edgq005hqu'; 
        const ticker = 'SATS'; 
        const type_ = 'transfer'; 
        const start = 0;
        const limit = 10;
        await expect(brc20.getAddressBrc20History(address, ticker, type_, start, limit)).resolves.toBeDefined();
    });

    test('getTransferableInscription', async () => {
        const address = 'bc1p55kw8qwk89fv2py9ddc2ae5q5d3z70d4sdtepl8625vgwyp4edgq005hqu'; 
        const ticker = 'SATS'; 
        const start = 0;
        const limit = 10;
        await expect(brc20.getTransferableInscription(address, ticker, start, limit)).resolves.toBeDefined();
    });
});
