const Request = require('./Reuqest');

class RequestBuilder {

    constructor() {
        this._req = new Request();
        this._decorators = [];
    }

    url(url) {
        this._req.url = url;
        return this;
    }

    method(method) {
        this._req.method = method;
        return this;
    }

    header(header) {
        this._req.headers.push(header);
        return this;
    }

    headers(headers) {
        this._req.headers = headers;
        return this;
    }

    decorator(decorator){
        this._decorators.push(decorator);
        return this;
    }

    create(){
        this._decorators.forEach(decorator => decorator(this._req));
        return this._req;
    }
}

module.exports = RequestBuilder;