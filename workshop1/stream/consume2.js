process.stdin.on('readable', function () {
  const buf = process.stdin.read(3);
  console.dir(buf);
});

// (echo abc; sleep 1; echo def; sleep 1; echo ghi) | node consume2.js

