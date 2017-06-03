var Set = function() {
  var set = Object.create(setPrototype);
  //set _storage to an empty object
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //set item at item key in _storage
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  //return true or false if there is a value at item key in _storage
  return this._storage[item] !== undefined;
};

setPrototype.remove = function(item) {
  //delete value of item key in _storage
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 constant, since we're going directly to the key
 */
