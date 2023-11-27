const axios = require('axios');

class ApiClient {
    constructor(baseUrl, token) {
        this.baseUrl = "https://open-api.unisat.io/";
        this.token = token;
        this.timeout = 10000;
        this.headers = {
            'Authorization': `Bearer ${this.token}`,
            'User-Agent': 'Unisat-Node-Client',
            'Content-Type': 'application/json',
        };
    }

    async makeRequest(method, path, data = {}) {
        const url = this.baseUrl + path;
        console.log(`Starting request: ${method} ${url}`);

        try {
            const response = await axios({
                method: method,
                url: url,
                headers: this.headers,
                data: data,
                timeout: this.timeout
            });

            console.log(`Response received: ${response.status} ${response.statusText}`);
            return response.data;
        } catch (error) {
            console.error(`Error during ${method} request to ${url}: ${error.message}`);
            if (error.response) {
                console.error(`Error details: ${error.response.status} ${error.response.statusText}`);
                console.log('Error response body:', error.response.data);
            }
            throw error;
        }
    }
}

module.exports = ApiClient;
