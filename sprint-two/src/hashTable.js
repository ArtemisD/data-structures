var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //check if this._storage[index] exists
  if (!this._storage[index]) {
    //if it doesn't, set it's value to an array
    this._storage[index] = [];
    //push an array of the key and value to the array
    this._storage[index].push([k, v]);
    return this;
  } else {
    //iterate through this._storage[index]
    for (var i = 0; i < this._storage[index].length; i++) {
      //if the key is stored at 0 index
      if (this._storage[index][i][0] === k) {
        //set the value to be stored at 1 index
        this._storage[index][i][1] = v;
        //else push an array of the key and value to the array
      } else {
        this._storage[index].push([k, v]);
      }
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  //we need to return the value of k if it exists at this._storage[index]
  var index = getIndexBelowMaxForKey(k, this._limit);
  //check if this._storage[index] exists
  if (!this._storage[index]) {
    //if it doesn't, return an error
    return "Error: not found";
  } else {
    //iterate through this._storage[index]
    for (var i = 0; i < this._storage[index].length; i++) {
      //if k exists at 0 index, return the value at the 1 index
      if (this._storage[index][i][0] === k) {
        return this._storage[index][i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //iterate through this._storage[index]
  for (var i = 0; i < this._storage[index]; i++) {
    //if k exists at 0 index, remove the entire array from this._storage[index]
    if (this._storage[index][i][0] === k) {
      this._storage[index].splice(i, 1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
