const http = require('http');

const server = http.Server();

// [req1, req2, req3]
server.on('request', handler);

function handler(req, res) {
  const now = Date.now();

  // while(Date.now() < now + 2000) {}

  setTimeout(() => {
    res.end('ok');
  }, 2000);

  // res.end('ok');
}

server.listen(3000);
