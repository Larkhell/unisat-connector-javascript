const General = require('../src/General');

describe('General', () => {
    const baseUrl = 'https://open-api.unisat.io';
    const token = 'your_token_api';
    const general = new General({ baseUrl, token });

    test('getBlockchainInfo', async () => {
        await expect(general.getBlockchainInfo()).resolves.toBeDefined();
    });

    test('getBlockTransactions', async () => {
        const height = 1000; 
        const cursor = 0; 
        const size = 10; 
        await expect(general.getBlockTransactions(height, cursor, size)).resolves.toBeDefined();
    });

    test('getTxInfo', async () => {
        const txid = 'fa44a4f4ac430bd392d032edef5441af950419a218298425f2d753ab5d9c2c36'; 
        await expect(general.getTxInfo(txid)).resolves.toBeDefined();
    });

    test('getTxInputs', async () => {
        const txid = 'fa44a4f4ac430bd392d032edef5441af950419a218298425f2d753ab5d9c2c36'; 
        const cursor = 0;
        const size = 10;
        await expect(general.getTxInputs(txid, cursor, size)).resolves.toBeDefined();
    });

    test('getTxOutputs', async () => {
        const txid = 'fa44a4f4ac430bd392d032edef5441af950419a218298425f2d753ab5d9c2c36'; 
        const cursor = 0;
        const size = 10;
        await expect(general.getTxOutputs(txid, cursor, size)).resolves.toBeDefined();
    });

    test('getAddressBalance', async () => {
        const address = 'bc1p55kw8qwk89fv2py9ddc2ae5q5d3z70d4sdtepl8625vgwyp4edgq005hqu'; 
        await expect(general.getAddressBalance(address)).resolves.toBeDefined();
    });

    test('getAddressHistory', async () => {
        const address = 'bc1p55kw8qwk89fv2py9ddc2ae5q5d3z70d4sdtepl8625vgwyp4edgq005hqu'; 
        const cursor = 0;
        const size = 10;
        await expect(general.getAddressHistory(address, cursor, size)).resolves.toBeDefined();
    });

    test('getBtcUtxo', async () => {
        const address = 'bc1p55kw8qwk89fv2py9ddc2ae5q5d3z70d4sdtepl8625vgwyp4edgq005hqu'; 
        const cursor = 0;
        const size = 10;
        await expect(general.getBtcUtxo(address, cursor, size)).resolves.toBeDefined();
    });

    test('getInscriptionUtxo', async () => {
        const address = 'bc1p55kw8qwk89fv2py9ddc2ae5q5d3z70d4sdtepl8625vgwyp4edgq005hqu'; 
        const cursor = 0;
        const size = 10;
        await expect(general.getInscriptionUtxo(address, cursor, size)).resolves.toBeDefined();
    });

    test('getInscriptionInfo', async () => {
        const inscriptionId = '51f76b673990feceda6b1ef886867165c1ccd0d0e3c2482c6fcc77b2741b04c5i0'; 
        await expect(general.getInscriptionInfo(inscriptionId)).resolves.toBeDefined();
    });
});
