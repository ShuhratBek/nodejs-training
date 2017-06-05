const concat = require('concat-stream');
process.stdin.pipe(concat((body) => {
  console.dir(JSON.parse(body));
}));


// echo {"beep":"boop"} | node concat.js
