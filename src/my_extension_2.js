const { ops } = globalThis.Deno.core;

console.log("my_extension_2.js loaded");

function myOp2() {
  return ops.my_op_2();
}

globalThis.MyExtension2 = {
  myOp2,
};
