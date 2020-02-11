const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
    it("should remove 'Hello' when input = ['Hello', 'Lighthouse', 'Labs']", () => {
        assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
    });
});



