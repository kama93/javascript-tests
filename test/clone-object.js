describe('clone object', function () {
  it('should clone an object', function () {
    let expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']}

    // it works fine for small objects, for larger it probably would be slow
    let obj = JSON.parse(JSON.stringify(expected))

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
