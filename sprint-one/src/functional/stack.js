var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    counter++;
    storage[counter] = value;
  };

  someInstance.pop = function() {
    var current = storage[counter];
    delete storage[counter];

    if (counter > 0) {
      counter--;
    }

    return current;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
