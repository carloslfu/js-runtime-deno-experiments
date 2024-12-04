const { ops } = globalThis.Deno.core;

const my_op = ops.my_op;

console.log("my_extension.js loaded");
console.log("my_op()", my_op());

function myOp() {
  return my_op();
}

globalThis.MyExtension = {
  myOp,
};
