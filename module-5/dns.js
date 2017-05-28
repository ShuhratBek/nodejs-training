const dns = require('dns'); //name -- address

dns.lookup('epam.com', (err, address) => {
    console.log(address);
});

dns.resolve4('epam.com', (err, address) => {
    console.log(address);
});

dns.resolve('epam.com', 'MX', (err, address) => {
    console.log(address);
});

dns.resolveMx('epam.com', (err, address) => {
    console.log(address);
});

dns.reverse('174.128.60.201', (err, hostnames) => {
    console.log(hostnames);
});