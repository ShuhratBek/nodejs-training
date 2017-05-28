process.stdout.write('\u001B[2J\u001B[0;0f');

const server = require('net').createServer();
let counter = 0;
let sockets = {};

server.on('connection', socket => {
    socket.id = counter++;
    console.log('Client connected');
    sockets[socket.id] = socket;
    socket.write('Welcome new client!\n');

    socket.on('data', data => {
        Object.entires(sockets).forEach(([, cs]) => {
            if (socket.id == key) return;
            cs.write(`${socket.id}: `);
            cs.write(data);
        });
    });

    socket.setEncoding('utf-8');

    socket.on('end', () => {
        delete sockets[socket.id];
        console.log('Client disconnected');
    });
});

server.listen(8000, () => console.log('Server bound'));