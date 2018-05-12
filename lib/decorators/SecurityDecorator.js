const SecurityDecorator = config => {
    const {appId} = config;
    const {secretKey} = config;

    return req => {
        req.addHeader({'api-key': secretKey});
        req.addHeader({'api-id': appId});
    };
};

module.exports = SecurityDecorator;