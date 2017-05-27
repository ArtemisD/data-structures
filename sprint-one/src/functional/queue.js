var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var newest = 0;
  var oldest = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //assign valu to 'newest' key
    storage[newest] = value;
    //increment newest
    newest++;
  };

  someInstance.dequeue = function() {
    //check if oldest does not equal newest
    if (oldest !== newest) {
      //if it does, initialize temp variable as the value at 'oldest' key
      var temp = storage[oldest];
      //delete that value
      delete storage[oldest];
      //increment oldest
      oldest++;
      //return the temp variable
      return temp;
    }
  };

  someInstance.size = function() {
    //get size by substracting oldest from newest
    return newest - oldest;
  };
  //return obj
  return someInstance;
};
