const { spawn } = require('child_process');

// const child = spawn('pwd');
// const child = spawn('find', ['.', '-type', 'f']); // find . -type f
const child = spawn('find', ['abcd', '-type', 'f']);

// stdio objects: child.stdin, child.stdout, child.stderr

child.stdout.on('data', (data) => {
  console.log(`child stdout:\n${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`child stderr:\n${data}`);
});

child.on('exit', (code, signal) => {
  console.log(`child process exited with code ${code}, signal ${signal}`);
});

// other events on child: disconnect, error, message, close
