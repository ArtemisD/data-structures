var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new stle.
  this.storage = {};
  this.newest = 0;
  this.oldest = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.newest] = value;
  this.newest++;
};

Queue.prototype.dequeue = function() {
  if (this.oldest !== this.newest) {
    var temp = this.storage[this.oldest];
    delete this.storage[this.oldest];
    this.oldest++;
    return temp;
  }
};

Queue.prototype.size = function() {
  return this.newest - this.oldest;
};

var createQueue = new Queue();
