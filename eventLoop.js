const fs = require("fs");
fs.readFile("test-file.txt", () => {
  console.log("reading i/o finished");
  console.log("----------------------------------");
  setTimeout(() => {
    console.log("timer3 finished");
  }, 3000); //phase 1
  setImmediate(() => {
    console.log("immediate2 finished");
  }); //phase 2 // nut inside this call back this should be executed first because after entering into the i/o poll phase (reading file here) it will waits in the same face until the next timeout expiry to start the cycle agin but here because the immediate is called after i/o (reading file) the "SETIMMEDIATE" takes the priority ove set timeout because it ii the next phase after I/O
    setTimeout(() => {
    console.log("timer2 finished");
  }, 0); //phase 1
}); //phase 3
setImmediate(() => {
  console.log("immediate1 finished");
}); //phase 2
setTimeout(() => {
  console.log("timer1 finished");
}, 0); //phase 1
console.log("hi from top level code"); //top level outside event loop
