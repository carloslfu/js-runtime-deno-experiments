const { ops } = globalThis.Deno.core;

const my_op_2 = ops.my_op_2;

console.log("my_extension_2.js loaded");
console.log("my_op_2()", my_op_2());

function myOp2() {
  return my_op_2();
}

globalThis.MyExtension2 = {
  myOp2,
};
