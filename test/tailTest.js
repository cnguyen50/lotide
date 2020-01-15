const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
    it("slices(1) for ['Hello', 'Lighthouse', 'Labs']", () => {
      assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
    });
});
//(["Hello", "Lighthouse", "Labs"]) replaced as tester



