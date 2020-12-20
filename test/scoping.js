describe('scoping', function () {
  it('should correctly deal with scoping `this` back to the callee', function () {
    var mod = new Module(),
    // add this here
        request;

    request = function (callback) {
      return callback()
    };

    function Module () {
      this.foo = 'bar';
    }

    Module.prototype.method = function() {
      return this.foo;
    };

    Module.prototype.req = function() {
      // 'this' used in requests points to 'request' function not to module
      // so we need to bind 'this' to the 'method'
      return request(this.method.bind(this))
    };

    expect(mod.req()).toBe('bar');
  });
});