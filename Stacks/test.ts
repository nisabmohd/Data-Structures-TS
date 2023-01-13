import { Stack } from "./Stack";

const stack = new Stack<string>();
stack.push("nisab");
stack.push("hello");
console.log(stack.size);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.size);
