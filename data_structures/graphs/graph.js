class Graph {
  constructor() {
    // instantiate the graph with a count of nodes and a hash to contain all possible neighbors of each node
    this.numberOfNodes = 0;
    this.neighbors = {};
  }

  // O(1)
  addNode(node) {
    // when a node is added to the graph, we set the node's neighbors to an empty array for when a neighbor is declared
    this.neighbors[node] = [];
    // increment the number of nodes in graph
    this.numberOfNodes++;
  }

  // O(1)
  addEdge(node1, node2) {
    // set the neighbor for node 1 to node 2 and vice versa
    this.neighbors[node1].push(node2);
    this.neighbors[node2].push(node1);
  }

  // verifies if the graph is connected properly, not necessary to know
  showConnections() {
    const allNodes = Object.keys(this.neighbors);

    for (const node of allNodes) {
      const connections = this.neighbors[node];
      let neighbors = "";

      for (const vertex of connections) {
        neighbors += vertex + " ";
      }

      console.log(node + " --> " + neighbors);
    }
  }
}

// TEST CASES
const graph = new Graph();
graph.addNode('0');
graph.addNode('1');
graph.addNode('2');
graph.addNode('3');
graph.addNode('4');
graph.addNode('5');
graph.addNode('6');
graph.addEdge('3', '1');
graph.addEdge('3', '4');
graph.addEdge('4', '2');
graph.addEdge('4', '5');
graph.addEdge('1', '2');
graph.addEdge('1', '0');
graph.addEdge('0', '2');
graph.addEdge('6', '5');
graph.showConnections();
