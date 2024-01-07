class Node {
	constructor(value, adjacent = new Set()) {
		this.value = value;
		this.adjacent = adjacent;
	}
}

class Graph {
	constructor() {
		this.nodes = new Set();
	}

	// this function accepts a Node instance and adds it to the nodes property on the graph
	addVertex(vertex) {
		// check if the vertex is not already present in the graph
		if (!this.nodes.has(vertex)) {
			// if not present, add vertex
			this.nodes.add(vertex);
		}
	}

	// this function accepts an array of Node instances and adds them to the nodes property on the graph
	addVertices(vertexArray) {
		for (let vertex of vertexArray) {
			this.addVertex(vertex);
		}
	}

	// this function accepts two vertices and updates their adjacent values to include the other vertex
	addEdge(v1, v2) {
		if (!this.nodes.has(v1) || !this.nodes.has(v2)) {
			throw new Error("GraphError: Graph does not contain those vertices");
		}
		v1.adjacent.add(v2);
		v2.adjacent.add(v1);
	}

	// this function accepts two vertices and updates their adjacent values to remove the other vertex
	removeEdge(v1, v2) {
		// should we have a error throw? yes i think so..... but some from stackoverflow say not
		if (!this.nodes.has(v1) || !this.nodes.has(v2)) {
			throw new Error("GraphError: Graph does not contain those vertices");
		}
		v1.adjacent.delete(v2);
		v2.adjacent.delete(v1);
	}
	// this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
	removeVertex(vertex) {
		if (!this.nodes.has(vertex)) {
			throw new Error(
				"GraphError: Graph does not contain the specified vertex"
			);
		}

		// Remove the vertex from the nodes property
		this.nodes.delete(vertex);

		// Update adjacency lists of other vertices to remove references to the deleted vertex
		for (let v of this.nodes) {
			v.adjacent.delete(vertex);
		}
	}

	// this function returns an array of Node values using DFS
	depthFirstSearch(start) {}

	// this function returns an array of Node values using BFS
	breadthFirstSearch(start) {}
}

module.exports = { Graph, Node };

// addVertex / addVertices
// This function should add a node to the graph.
// let graph = new Graph()
// let a = new Node("A")
// let b = new Node("B")
// let c = new Node("C")
// graph.addVertices([a,b])
// graph.addVertex(c)
// graph.nodes.has(a) // true
// graph.nodes.has(b) // true
// graph.nodes.has(c) // true

// addEdge
// This function should add an edge between two nodes in the graph and place each value of the nodes in each array for the value of the node in the adjacency list.
// let graph = new Graph()
// let a = new Node("A")
// let b = new Node("B")
// let c = new Node("C")
// let d = new Node("D")
// graph.addVertices([a, b, c, d])
// graph.addEdge(a, b)
// graph.addEdge(a, c)
// graph.addEdge(b, d)
// graph.addEdge(c, d)
// a.adjacent // contains b and c
// b.adjacent // contains a and d
// c.adjacent // contains a and d
// d.adjacent // contains b and c

// removeEdge
// This function should accept two nodes and remove the edge between them. It should modify the adjacency list to ensure that both values are not in each array for the two nodes which no longer contain the edge.
// let graph = new Graph()
// let a = new Node("A")
// let b = new Node("B")
// let c = new Node("C")
// let d = new Node("D")
// graph.addVertices([a, b, c, d])
// graph.addEdge(a, b)
// graph.addEdge(a, c)
// graph.addEdge(b, d)
// graph.addEdge(c, d)
// graph.removeEdge(b,a)
// graph.removeEdge(c,d)
// a.adjacent // does not contain b
// b.adjacent // does not contain a
// c.adjacent // does not contain d
// d.adjacent // does not contain c

// removeVertex
// This function should remove the node in the array of nodes and also remove all edges that the removed node previously contained.
// let graph = new Graph()
// let a = new Node("A")
// let b = new Node("B")
// let c = new Node("C")
// let d = new Node("D")
// graph.addVertices([a, b, c, d])
// graph.addEdge(a, b)
// graph.addEdge(a, c)
// graph.addEdge(b, d)
// graph.addEdge(c, d)
// graph.removeVertex(c)
// graph.removeVertex(d)
// graph.nodes.has(a) // true
// graph.nodes.has(b) // true
// graph.nodes.has(c) // false
// graph.nodes.has(d) // false

// depthFirstSearch
// This function should return an array of nodes visited using DFS.
// You can do this iteratively (using a stack) or recursively, but note the order of the results will be different. Try to solve this without consulting the lecture notes!
// let graph = new Graph()
// let S = new Node('S');
// let P = new Node('P');
// let U = new Node('U');
// let X = new Node('X');
// let Q = new Node('Q');
// let Y = new Node('Y');
// let V = new Node('V');
// let R = new Node('R');
// let W = new Node('W');
// let T = new Node('T');
// graph.addVertices([S,P,U,X,Q,Y,V,R,W,T])
// graph.addEdge(S, P);
// graph.addEdge(S, U);
// graph.addEdge(P, X);
// graph.addEdge(U, X);
// graph.addEdge(P, Q);
// graph.addEdge(U, V);
// graph.addEdge(X, Q);
// graph.addEdge(X, Y);
// graph.addEdge(X, V);
// graph.addEdge(Q, R);
// graph.addEdge(Y, R);
// graph.addEdge(Y, W);
// graph.addEdge(V, W);
// graph.addEdge(R, T);
// graph.addEdge(W, T);
// // this is one option:
// graph.depthFirstSearch(S) // ["S", "P", "U", "X", "Q", "V", "Y", "R", "W", "T"]

// breadthFirstSearch
// This function should return an array of vertices visited using BFS.
// Try to solve this without consulting the lecture notes!
// let graph = new Graph()
// let S = new Node('S');
// let P = new Node('P');
// let U = new Node('U');
// let X = new Node('X');
// let Q = new Node('Q');
// let Y = new Node('Y');
// let V = new Node('V');
// let R = new Node('R');
// let W = new Node('W');
// let T = new Node('T');
// graph.addVertices([S,P,U,X,Q,Y,V,R,W,T])
// graph.addEdge(S, P);
// graph.addEdge(S, U);
// graph.addEdge(P, X);
// graph.addEdge(U, X);
// graph.addEdge(P, Q);
// graph.addEdge(U, V);
// graph.addEdge(X, Q);
// graph.addEdge(X, Y);
// graph.addEdge(X, V);
// graph.addEdge(Q, R);
// graph.addEdge(Y, R);
// graph.addEdge(Y, W);
// graph.addEdge(V, W);
// graph.addEdge(R, T);
// graph.addEdge(W, T);
// // this is one option:
// graph.depthFirstSearch(S) // ["S", "U", "V", "W", "T", "R", "Q", "Y", "X", "P"]
// DEMO CODE __________________________________________________________________________
// class PersonNode {
//   constructor(name, adjacent = new Set()) {
//     this.name = name;
//     this.adjacent = adjacent;
//   }
// }

// class FriendGraph {
//   constructor() {
//     this.nodes = new Set();
//   }
//   addPerson(node) {
//     this.nodes.add(node);
//   }
//   addPeople(peopleList) {
//     for (let node of peopleList) {
//       this.addPerson(node);
//     }
//   }
//   setFriends(person1, person2) {
//     person1.adjacent.add(person2);
//     person2.adjacent.add(person1);
//   }
//   areConnectedBFS(person1, person2) {
//     let toVisitQueue = [person1];
//     let seen = new Set(toVisitQueue);
//     while (toVisitQueue.length) {
//       let currPerson = toVisitQueue.shift();
//       console.log("BFS VISITING:", currPerson.name);

//       if (currPerson === person2) return true;

//       for (let neighbor of currPerson.adjacent) {
//         if (!seen.has(neighbor)) {
//           toVisitQueue.push(neighbor);
//           seen.add(neighbor);
//         }
//       }
//     }
//     return false;
//   }
//   areConnectedDFS(person1, person2) {
//     let toVisitStack = [person1];
//     let seen = new Set(toVisitStack);
//     while (toVisitStack.length) {
//       console.log(toVisitStack.map((node) => node.name));

//       let currPerson = toVisitStack.pop();
//       console.log("DFS VISITING:", currPerson.name);

//       if (currPerson === person2) return true;

//       for (let neighbor of currPerson.adjacent) {
//         if (!seen.has(neighbor)) {
//           toVisitStack.push(neighbor);
//           seen.add(neighbor);
//         }
//       }
//     }
//     return false;
//   }
//   areConnectedRecursive(person1, person2, seen = new Set([person1])) {
//     if (person1 === person2) return true;
//     for (let neighbor of person1.adjacent) {
//       if (!seen.has(neighbor)) {
//         seen.add(neighbor);
//         if (this.areConnectedRecursive(neighbor, person2, seen)) {
//           return true;
//         }
//       }
//     }
//     return false;
//   }
// }

// const homer = new PersonNode("homer simpson");
// const marge = new PersonNode("marge simpson");
// const maggie = new PersonNode("maggie simpson");
// const lisa = new PersonNode("lisa simpson");
// const grampa = new PersonNode("grampa simpson");

// const friends = new FriendGraph();
// friends.addPeople([homer, marge, maggie, lisa, grampa]);
// friends.setFriends(homer, marge);
// friends.setFriends(homer, lisa);
// friends.setFriends(homer, maggie);
// friends.setFriends(marge, maggie);
// friends.setFriends(maggie, lisa);
// friends.setFriends(lisa, grampa);

// const moe = new PersonNode("moe");
// const barney = new PersonNode("barney");
// const lenny = new PersonNode("lenny");
// friends.addPeople([moe, barney, lenny]);
// friends.setFriends(moe, barney);
// friends.setFriends(barney, lenny);

// // friends.areConnected(marge, moe)

// DEMO CODE __________________________________________________________________________
