const http = require('http');
const pid = process.pid;

http.createServer((req, res) => {
  for(let i = 0; i <1e7; i++) {
    res.end(`Handled by process ${pid}`);
  }
}).listen(8000, () => {
  console.log(`Started process ${pid}`);
});


// Benchmark for available request ApacheBench tool
// ab -c200 -t10 http://localhost:8000/
