class Request {
    constructor(url = '', method = 'GET', headers = [], body = {}) {
        this._url = url;
        this._method = method;
        this._headers = headers;
        this._body = body;
    }

    get url() {
        return this._url;
    }

    set url(url) {
        this._url = url;
    }

    get method() {
        return this._method;
    }

    set method(method) {
        this._method = method;
    }

    get headers() {
        return this._headers;
    }

    set headers(headers) {
        this._headers = headers;
    }

    addHeader(header){
        this._headers.push(header);
    }

    get body() {
        return this._body;
    }

    set body(body) {
        this._body = body;
    }
}

module.exports = Request;