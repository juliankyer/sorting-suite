import { expect } from 'chai';
import mergeSort from '../scripts/merge-sort';
import mergeSides from '../scripts/merge-sort';

describe('testing merge sort', ()=> {
  it('should throw an error if an array is not passed in', ()=> {
    expect( ()=> mergeSort('hi')).to.throw('error');
  });

  it('should return an array', ()=> {
    let mergeSortThis = mergeSort([1, 2, 3]);
    expect(Array.isArray(mergeSort([1, 2, 3]))).to.be.true;
  });

  it('should sort an array of numbers', ()=> {
    let mergeSortThis = mergeSort([1, 4, 2, 5, 3]);
    expect(mergeSortThis).to.deep.equal([1, 2, 3, 4, 5]);
  });
  
  it('should sort an array of letters', ()=> {
    let mergeSortThis = mergeSort(['E', 'A', 'D', 'C', 'B']);
    expect(mergeSortThis).to.deep.equal(['A', 'B', 'C', 'D', 'E']);
  });
});
