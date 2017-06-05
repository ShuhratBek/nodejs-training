process.stdin.on('readable', function () {
  const buf = process.stdin.read();
  console.dir(buf);
});


// (echo abc; sleep 1; echo def; sleep 1; echo ghi) | node consume.js
