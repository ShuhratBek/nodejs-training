process.stdin.on('readable', function () {
  const buf = process.stdin.read(3);
  console.dir(buf);
  process.stdin.read(0);
});

// (echo abc; sleep 1; echo def; sleep 1; echo ghi) | node consume3.js

