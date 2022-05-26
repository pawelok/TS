import {getRequest, postRequest} from '../variables.js';
import {expect} from 'chai';

/*

- lastly please answer this question in this block:
    1) Please explain the difference between a GET and a POST request. When is a POST request made and when is a GET request made? Provide an example.       
    2) What is the primary difference between a PATCH and a PUT request. 

    //ANSWER HERE//
    1)
    Get request is used to acquire some data. We can use some query params to filter out some data.

    Post requests as it name says is used to post some data (can be a large amount of data) to server. But the data is sent within the body.

    For example, we would like to get new message form facebook, so we would send a GET request to get certain massage with some query params inside the url.
    If we would like to send message to another person we should use POST request with certain body that is not visible in the URL.

    2)

    With PUT we can update certain param value, but it might affect other values, it fully overrides full object.
    With PATCH we can update certain param value within an object, with no damage to other values in object.


*/

describe("Tastyworks QA codi challenge", function () {

    it("should get the single stock", async () => {

        const url = 'https://sandbox.iexapis.com/stable/stock/aapl/quote?token=Tsk_456ccaccad6f455886f60ab0529a0345';
        let response = await getRequest(url).then();

        expect(response.data.symbol).to.eq('AAPL');
        expect(response.data.companyName).to.eq('Apple Inc');
        expect(response.data.isUSMarketOpen).to.be.a('boolean');
        expect(response.status).to.eq(200);
    })

    it("should get both TSLA and FB stocks", async () => {

        const url = 'https://sandbox.iexapis.com/stable/stock/market/batch?symbols=tsla,fb&types=quote,news,chart&range=1m&last=5&token=Tsk_456ccaccad6f455886f60ab0529a0345';
        let response = await getRequest(url)
        let tsla = response.data.TSLA.quote
        let fb = response.data.FB.quote

        expect([tsla.symbol, fb.symbol]).to.eql(['TSLA', 'FB']);
        expect([tsla.companyName, fb.companyName]).to.eql(['Tesla Inc', 'Meta Platforms Inc - Class A']);
        expect(response.status).to.eq(200)
    })

    it("verify POST request", async () => {

        const url = 'https://tastyworks.dev.api';
        let response = await postRequest(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "symbol": 'AAPL',
                "price": 145,
                "quantity": 100
            }
        });

        expect(response.status).to.eq(200);
    })
})