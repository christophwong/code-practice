document.writeln("hello world");

Function.prototype.method = function (name, fn) {
  this.prototype[name] = fn;
  return this;
}
