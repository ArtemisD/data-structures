var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.newest = 0;
  someInstance.oldest = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;
};
var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.newest] = value;
  this.newest++;
};

queueMethods.dequeue = function() {
  if (this.oldest !== this.newest) {
    var temp = this.storage[this.oldest];
    delete this.storage[this.oldest];
    this.oldest++;
    return temp;
  }
};

queueMethods.size = function() {
  return this.newest - this.oldest;
};
