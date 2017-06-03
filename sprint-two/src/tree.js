var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));

};

treeMethods.contains = function(target) {
  var isTrue = false;
  //will need to make recursive function to search all children
  var searchChildren = function (tree) {
    //check if tree value is equal to target
    if (tree.value === target) {
      isTrue = true;
      return isTrue;
    }
    //check all children
    for (var i = 0; i < tree.children.length; i++) {
      searchChildren(tree.children[i]);
    }
  };
  searchChildren(this);
  return isTrue;
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild: constant, since we're just pushing to the end of an array
 contains: linear sine we have to check every node
 */
