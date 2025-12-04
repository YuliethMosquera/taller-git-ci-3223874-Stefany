import { strict as assert } from 'assert';
import { suma } from '../src/app.js';

describe('suma', () => {
  it('suma 2 + 3 = 5', () => {
    assert.equal(suma(2, 3), 5);
  });

  it('suma 10 + 5 = 15', () => {
    assert.equal(suma(10, 5), 15);
  });
});
