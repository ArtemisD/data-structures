var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //check if this._storage[index] is defined
  if (!this._storage[index]) {
    //if it isn't, set its value to an array
    this._storage[index] = [];
    //push an array of the key and value pair to this._storage[index]
    this._storage[index].push([k, v]);
  } else {
    //iterate through this._storage[index]
    for (var i = 0; i < this._storage[index].length; i++) {
      //if the key is stored at index 0
      if (this._storage[index][i][0] === k) {
        //assign the value to be stored at index 1
        this._storage[index][i][1] = v;
        //else push an array of the key and value pair to this._storage[index]
      } else {
        this._storage[index].push([k, v]);
      }
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  //we need to return the value of k if it exists at this._storage[index]
  var index = getIndexBelowMaxForKey(k, this._limit);
  //iterate through this._storage[index]
  for (var i = 0; i < this._storage[index].length; i++) {
    //if k exists at index 0, return its value at index 1
    if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //iterate through this._storage[index]
  for (var i = 0; i < this._storage[index].length; i++) {
    //if k exists at index 0, remove the entire array from this._storage[index]
    if (this._storage[index][i][0] === k) {
      return this._storage[index].splice(i, 1);
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 A: The time complexity overall is constant since we are going directly to the index of this._storage
 */
