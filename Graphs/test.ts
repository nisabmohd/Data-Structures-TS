import { Graph } from "./Graph";

const graph = new Graph<number>(false);

graph.add(1, 2);
graph.add(1, 3);
graph.add(2, 4);
graph.add(3, 5);
graph.add(4, 5);
graph.add(6);

console.log(graph.dfs(1));
console.log(graph.bfs(1));

console.log(graph.dfs());
console.log(graph.bfs());
