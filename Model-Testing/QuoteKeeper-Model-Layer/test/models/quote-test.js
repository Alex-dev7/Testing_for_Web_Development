const {assert} = require('chai');
const {mongoose, databaseUrl, options, connectAndDrop, disconnect} = require('../../database');
const Quote = require('../../models/quote');

describe('Quote', () => {
  // hooks
  beforeEach(connectAndDrop)
  afterEach(disconnect)

  describe('#quote', () => {
    it('is a String', () => {
      const quoteAsInt = 1;

      const citation = new Quote({quote: quoteAsInt});
  
      assert.strictEqual(citation.quote, quoteAsInt.toString());
    });
  });

    describe('#attributed', () => {
    it('is a String', () => {
      const attributed = "Something Something";

      const citation = new Quote({attributed});

      assert.isString(citation.attributed);
      assert.strictEqual(citation.attributed, attributed);
    });
  });

    describe('#source', () => {
    it('is a String', () => {
      const source = "Library";

      const citation = new Quote({source});

      assert.isString(citation.source);
      assert.strictEqual(citation.source, source);
    });
  });
})