/* eslint-env mocha */

// mocha imports
import chai from 'chai';
chai.should();

// subject imports
import { hello } from './hello.js';

describe('hello', function () {
  it('returns default', function () {
    const output = hello();

    output.should.equal('Hello world!');
  });

  it('returns input', function () {
    const input = 'Jason';
    const output = hello(input);

    output.should.equal('Hello Jason!');
  });
});
