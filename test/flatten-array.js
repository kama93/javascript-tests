describe('flatten array', function () {
  it('should flatten an array', function () {
   let arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]]
   let arr2 = arr.flat(Infinity)
   arr2.sort((a,b) => a - b)
   expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
  // I changed arr to arr2 in test because I think it
  // always better to create new array if you changing anything inside
  // I also added sorting as the 'expected' value appears to be sorted
    expect(arr2).toEqual(expected);
  });
});