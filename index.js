const rp = require('request-promise');

const RequestBuilder = require('./lib/RequestBuilder');
const {SecurityDecorator} = require('./lib/decorators');

const config = {
    secretKey: 'secretKey',
    appId: 'applicationId'
};

const builder = new RequestBuilder()
    .url('http://www.google.com')
    .method('GET')
    .header({'x-token': 'token'})
    .decorator(SecurityDecorator(config));

const req = builder.create();

console.log(req);

rp({uri: req.url, headers: req.headers})
    .then(response => console.log(response))
    .catch(err => console.log(err));
