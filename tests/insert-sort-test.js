import { expect } from 'chai';
import insertSort from '../scripts/insert-sort'

describe('testing bubble sort', ()=> {
  it('should sort an array of numbers', ()=> {
    let insertSortThis = insertSort([1, 4, 2, 5, 3]);
    expect(insertSortThis).to.deep.equal([1, 2, 3, 4, 5]);
  });
  it('should sort an array of letters', ()=> {
    let insertSortThis = insertSort(['E', 'A', 'D', 'C', 'B']);
    expect(insertSortThis).to.deep.equal(['A', 'B', 'C', 'D', 'E']);
  });
  it('should step through the array and switch values pt 1', ()=> {
    let insertSortThis = insertSort([2, 1]);
    expect(insertSortThis).to.deep.equal([1, 2]);
  });
  it('should step through the array and switch values pt 2', ()=> {
    let insertSortThis = insertSort([1, 3, 2]);
    expect(insertSortThis).to.deep.equal([1, 2, 3]);
  });
  it('should step through the array and switch values pt 3', ()=> {
    let insertSortThis = insertSort([1, 3, 2, 4]);
    expect(insertSortThis).to.deep.equal([1, 2, 3, 4]);
  });
});
