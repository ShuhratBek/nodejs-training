const { Duplex } = require('stream');

const inoutSream = new Duplex({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  },

  read(size) {
    if(this.currentCharCode > 90) {
      this.push(null);
      return;
    }
    this.push(String.fromCharCode(this.currentCharCode++));
  }
});

inoutSream.currentCharCode = 65;
process.stdin.pipe(inoutSream).pipe(process.stdout);
