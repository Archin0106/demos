const app = require('../script');
const assert = require('chai').assert;

describe('Sample Test Cases', () => {
    it('Should return Hello World', () => {
        let result = app.sayHello();
        assert.equal(result, 'Hello World');
    });
});