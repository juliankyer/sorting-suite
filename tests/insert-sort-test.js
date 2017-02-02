import { expect } from 'chai';
import insertSort from '../scripts/insert-sort'

describe('testing insertion sort', ()=> {
  it('should throw an error if an array is not passed in', ()=> {
    expect( ()=> insertSort('hi')).to.throw('error');
  });

  it('should return an array', ()=> {
    let insertSortThis = insertSort([1, 2, 3]);
    expect(Array.isArray(insertSort([1, 2, 3]))).to.be.true;
  });

  it('should sort an array of numbers', ()=> {
    let insertSortThis = insertSort([1, 4, 2, 5, 3]);
    expect(insertSortThis).to.deep.equal([1, 2, 3, 4, 5]);
  });
  it('should sort an array of letters', ()=> {
    let insertSortThis = insertSort(['E', 'A', 'D', 'C', 'B']);
    expect(insertSortThis).to.deep.equal(['A', 'B', 'C', 'D', 'E']);
  });
});
