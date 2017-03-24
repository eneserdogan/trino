const expect 	= require('chai').expect;
const Translate = require('@google-cloud/translate')({
    key: 'AIzaSyBTx3natq5Zb7BkuSsp2WeJp74Q-6PXFnY'
});

describe('Trino Command Line Tools', function() {
    it('<text> => "Hello" <target> => "tr" <result> => "Merhaba"', function() {
        Translate.translate("Hello", "tr").then((results) => {
            expect(results[0]).to.equal('Merhaba');
        })
    });
});