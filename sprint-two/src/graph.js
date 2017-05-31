// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //make value of node an empty array
  this.nodes[node] = [];
  return this;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //return true or false if node exists as a key
  return this.nodes[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //iterate through all keys
  for (var key in this.nodes) {
    //check if node is in key
    if (this.nodes[key].includes(node)) {
      //if it is, get index of that node in key
      var index = this.nodes[key].indexOf(node);
      //remove that node from key
      this.nodes[key].splice(index, 1);
    }
  }
  //remove this.nodes[node]
  delete this.nodes[node];
  return this;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //return true or false if fromNode includes toNode
  return this.nodes[fromNode].includes(toNode);

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //add toNode if it isn't defined
  if (this.nodes[toNode] === undefined) {
    this.addNode(toNode);
  }
  //add fromNode if it isn't defined
  if (this.nodes[fromNode] === undefined) {
    this.addNode(fromNode);
  }
  //push toNode to fromNode
  this.nodes[fromNode].push(toNode);
  //push fromNode to toNode
  this.nodes[toNode].push(fromNode);
  return this;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //get index of toNode in fromNode
  var fromIndex = this.nodes[fromNode].indexOf(toNode);
  //get index of fromNode in toNode
  var toIndex = this.nodes[toNode].indexOf(fromNode);
  //remove toNode from fromNode at its index
  this.nodes[fromNode].splice(fromIndex, 1);
  //remove fromNode from toNode at its index
  this.nodes[toNode].splice(toIndex, 1);
  return this;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //iterate through all keys
  for (var key in this.nodes) {
    //call callback function on every element
    cb(key, this.nodes[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
