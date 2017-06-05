const { spawn } = require('child_process');

// const child = spawn('find', ['.', '-type', 'f'], {
//   stdio: 'inherit',
// });
//
// const child = spawn('find . -type f', {
//   stdio: 'inherit',
//   shell: true
// });

// Different cwd
// const child = spawn('find . -type f | wc -l', {
//   stdio: 'inherit',
//   shell: true,
//   cwd: '/usr/src/app/module-1'
// });

const child = spawn('echo $HOME', {
  stdio: 'inherit',
  shell: true,
  // env: {},
  // env: { ANSWER: 26 }
});
