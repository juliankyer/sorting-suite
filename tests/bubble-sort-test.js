import { expect } from 'chai';
import bubbleSort from '../scripts/bubble-sort'

describe('testing bubble sort', ()=> {
  it('should throw an error if an array is not passed in', ()=> {
    expect( ()=> bubbleSort('hi')).to.throw('error');
  });

  it('should return an array', ()=> {
    let bubbleSortThis = bubbleSort([1, 2, 3]);
    expect(Array.isArray(bubbleSort([1, 2, 3]))).to.be.true;
  });

  it('should sort an array of numbers', ()=> {
    let bubbleSortThis = bubbleSort([1, 4, 2, 5, 3]);
    expect(bubbleSortThis).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('should sort an array of letters', ()=> {
    let bubbleSortThis = bubbleSort(['E', 'A', 'D', 'C', 'B']);
    expect(bubbleSortThis).to.deep.equal(['A', 'B', 'C', 'D', 'E']);
  });
});
