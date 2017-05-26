var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  //create obj to store numerickeys
  someInstance.storage = {};
  //create counter to increase & decrease size of obj
  someInstance.counter = 0;
  //use extend method to pass obj through stackMethods
  _.extend(someInstance, stackMethods);
  //return obj;
  return someInstance;
};

var stackMethods = {};
//add new value to top of stack
stackMethods.push = function (value) {
  this.counter++;
  this.storage[this.counter] = value;
};
//remove newest value from top of stack;
stackMethods.pop = function() {
  var current = this.storage[this.counter];
  delete this.storage[this.counter];
  if (this.counter > 0) {
    this.counter--;
  }
  return current;
};
//get size of obj
stackMethods.size = function() {
  return this.counter;
};
