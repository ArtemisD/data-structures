var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.right = undefined;
  newTree.left = undefined;
  _.extend(newTree, binarySearchTreeMethods);
  return newTree;
};

//declare methods named "insert", "contains", and "depthFirstLog
var binarySearchTreeMethods = {};
//set method to take in a value as its parameter
binarySearchTreeMethods.insert = function(value) {
  //set currentNode to value
  var currentNode = BinarySearchTree(value);
  //inner recursive function
  var searchTree = function(node) {
    //check if node.left is undefined & if its value is less than node value
    if (!node.left && value < node.value) {
      //if this is true, set node.left to passed in value
      node.left = currentNode;
      //else if node.left is already defined
    } else if (node.left && value < node.value) {
      //call inner recursive function on node.left
      searchTree(node.left);
      //check if node.right is undefined and if its values is greater than node.value
    } else if (!node.right && value > node.value) {
      //if this is true, set node.right to passed in value
      node.right = currentNode;
      //else if node.right is already defined
    } else if (node.right && value > node.value) {
      //call inner recursive function on node.right
      searchTree(node.right);
    }
  };
  //call inner recusive function on tree
  searchTree(this);
};

binarySearchTreeMethods.contains = function(target) {
  //define a variable and set it to false
  var isTrue = false;
  //inner recursive function
  var searchTree = function(node) {
    //base case: if the current value is equal to passed in target, return true
    if (node.value === target) {
      isTrue = true;
    }
    //else if isTrue is false & node.left is defined, call inner recursive function on node.left
    if (!isTrue && node.left) {
      searchTree(node.left);
    }
    //else if isTrue is false & node.right is defined, call inner recursive function on node.right
    if (!isTrue && node.right) {
      searchTree(node.right);
    }
  };
  //call inner recursive function on tree
  searchTree(this);
  return isTrue;
};

binarySearchTreeMethods.depthFirstLog = function(callback) {
  //inner recursive function
  var searchDepth = function(node) {
    //pass current node value through callback
    callback(node.value);

    if (node.left) {
      //if there is a node.left, call inner recursive function on it
      searchDepth(node.left);
    }
    if (node.right) {
      //if there is a node.right, call inner recursive function on it
      searchDepth(node.right);
    }
  };
  searchDepth(this);
};
/*
 * Complexity: What is the time complexity of the above functions?
 0(log n), since we are cutting the values searched by half each time
 */
