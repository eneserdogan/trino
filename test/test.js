const expect 	= require('chai').expect;
const Translate = require('@google-cloud/translate')({
    key: 'AIzaSyBTx3natq5Zb7BkuSsp2WeJp74Q-6PXFnY'
});
var assert = require('assert');

describe('Trino Command Line Tools', function() {
    it('<text> => "Hello" <target> => "tr" <result> => "Merhaba"', function() {
        Translate.translate("Hello", "tr").then((results) => {
            expect(results[0]).to.equal('Merhaba');
        })
    });
});


describe('Trino Command Line Detection Test', function() {
    it('<text> => "Günaydın" detection result should be "tr"', function() {
       Translate.detect('Günaydın').then((results) => {
            assert.equal(results[0],'en','Detection of this word could not be found!');
       })
  });
});