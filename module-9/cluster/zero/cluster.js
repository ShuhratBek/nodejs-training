const cluster = require('cluster');
const os = require('os');

if(cluster.isMaster) {
  const cpus = os.cpus().length;

  console.log(`Forking for ${cpus} CPUs`);
  for(let i = 0; i < cpus; i++) {
    cluster.fork();
  }

  console.log(`Master PID: ${process.id}`);

  cluster.on('exit', (worker, code, signal) => {
    if(code !== 0 && !worker.exitedAfterDisconnect) {
      console.log(`Worker ${worker.id} crashed.\nStarted a new worker...`);
      cluster.fork();
    }
  });

  // works only in linux

  process.on('SIGUSR2', () => {
    const workers = Object.values(cluster.workers);

    const restartWorkers = (workerIndex) => {
      const worker = workers[workerIndex];
      if(!worker) return;

      worker.on('exit', () => {
        if(!worker.exitedAfterDisconnect) return;
        console.log(`Exited process ${worker.process.id}`);
        cluster.fork().on('listening', () => {
          restartWorkers(workerIndex + 1);
        });
      });
      worker.disconnect();
    };
    restartWorkers(0);
  })
} else {
  require('./server');
}

// ab -c200 -t10 http://localhost:8000/
// kill -SIGUSR2 PID
