const http = require('http');
const words = require('boganipsum')({ paragraphs: 2, sentenceMax: 1 }).split(' ');

const server = http.createServer((req, res) => {
  // use setInterval to slow down the output to test timing
  let i = 0;
  setInterval(() => {
    if (i === words.length) {
      return res.end()
    }
    res.write(words[i].trim());
    i++;
  }, 50);
});

server.on('error', (err) => {
  if(err) throw err;
});

server.listen(8080);
