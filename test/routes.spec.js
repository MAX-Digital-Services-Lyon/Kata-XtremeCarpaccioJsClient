// Importez les fonctions à tester
const { order, feedback } = require('../lib/routes');

// Importez un outil de test comme Mocha ou Jest
const assert = require('assert');

// Écrivez les tests unitaires
describe('routes.js tests', function () {
  describe('order function', function () {
    it('should return an empty object when received an empty body', function () {
      const req = {};
      const res = {
        json: function (data) {
          assert.deepStrictEqual(data, {});
        }
      };
      order(req, res, function () { });
    });

    // it('should return an total object when received a body', function () {
    //   const req = { body: { prices: [1.0], quantities: [1], country: "FR", reduction: "STANDARD" } };
    //   const res = {
    //     json: function (data) {
    //       assert.deepStrictEqual(data, { total: 1234.56 });
    //     }
    //   };
    //   order(req, res, function () { });
    // });
  });

  describe('feedback function', function () {
    it('should call next function', function (done) {
      const req = { body: {} };
      const res = {};
      feedback(req, res, done);
    });
  });
});