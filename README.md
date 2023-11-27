# unisat-connector-javascript
A JavaScript library for UniSat API integration.

## Warning
- Pre-alpha version, not for production.
- Not affiliated with UniSat.
- Not thread-safe.

## API Documentation
- Mainnet Swagger: [Mainnet Swagger Documentation](https://open-api.unisat.io/swagger.html)
- Testnet Swagger: [Testnet Swagger Documentation](https://open-api-testnet.unisat.io/swagger.html)

## Installation
```sh
$ git clone install unisat-connector-javascript
```

## Usage
Create UniSatConnector with your API token and base URL.

```
const UnisatConnector = require('unisat-connector-javascript');

const token = process.env.UNISAT_KEY; // Your UniSat API token
const unisat = new UnisatConnector("https://open-api.unisat.io/", token);

// General Module Usage
async function getBlockchainInfo() {
    try {
        const info = await unisat.general.getBlockchainInfo();
        console.log(info);
    } catch (error) {
        console.error(error);
    }
}

// BRC-20 Module Usage
async function getBrc20Info() {
    try {
        const bestBlockHeight = await unisat.brc20.getBestBlockHeight();
        console.log(bestBlockHeight);
    } catch (error) {
        console.error(error);
    }
}

getBlockchainInfo();
getBrc20Info();
```

### General Module
Handles general information queries.

#### `getBlockchainInfo`
Get blockchain info.
```javascript
unisat.general.getBlockchainInfo();
```

#### `getBlockTransactions`
Get block transactions.
```javascript
unisat.general.getBlockTransactions(height, cursor, size);
```

#### `getTxInfo`
Get transaction info.
```javascript
unisat.general.getTxInfo(txid);
```

### BRC-20 Module
Handles BRC-20 token queries.

#### `getBestBlockHeight`
Get best block height.
```javascript
unisat.brc20.getBestBlockHeight();
```

#### `getBrc20List`
List BRC-20 tokens.
```javascript
unisat.brc20.getBrc20List(start, limit);
```

#### `getBrc20Info`
Get BRC-20 token info.
```javascript
unisat.brc20.getBrc20Info(ticker);
```

#### `getBrc20Holders`
Get BRC-20 token holders.
```javascript
unisat.brc20.getBrc20Holders(ticker, start, limit);
```

## Tests
Run tests:
```sh
$ npm test
```

## Contributing
Contributions welcome. Open issues or submit pull requests.

## License
BSD 3-Clause License.
```

This is the complete README for your JavaScript module without comments and in English.