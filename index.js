const General = require('./src/General');
const BRC20 = require('./src/BRC20');

class UnisatConnector {
    constructor(baseUrl, token) {
        this.general = new General({ baseUrl, token });
        this.brc20 = new BRC20({ baseUrl, token });
    }
}

// Exemple d'utilisation
const unisat = new UnisatConnector("https://open-api.unisat.io/", "your_token_here");

unisat.general.getBlockchainInfo().then(info => {
    console.log("Blockchain Info:", info);
}).catch(error => {
    console.error("Error:", error);
});

unisat.brc20.getBestBlockHeight().then(height => {
    console.log("Best Block Height:", height);
}).catch(error => {
    console.error("Error:", error);
});

module.exports = UnisatConnector;
