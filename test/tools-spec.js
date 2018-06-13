const expect = require('chai').expect;
const nock = require('nock');
const tools = require('../lib/tools');

describe('Tools', () => {

  describe('printName()', () => {
    it('should print the last name first', () => {
      const results = tools.printName({ first: 'Shaun', last: 'Spinelli' });
      expect(results).to.equal('Spinelli, Shaun');
    });
  });

  describe('loadWiki()', () => {
    before(() => {
      nock('https://en.wikipedia.org')
        .get('/wiki/Abraham_Lincoln')
        .reply(200, 'Mock Abraham Lincoln Page');
    });
    it("should load Abraham Lincoln's wikipedia page", done => {
      tools.loadWiki({ first: 'Abraham', last: 'Lincoln' }, html => {
        expect(html).to.equal('Mock Abraham Lincoln Page');
        done();
      });
    })
  });

});
