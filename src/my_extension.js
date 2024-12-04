const { ops } = globalThis.Deno.core;

console.log("my_extension.js loaded");

function myOp() {
  return ops.my_op();
}

globalThis.MyExtension = {
  myOp,
};
