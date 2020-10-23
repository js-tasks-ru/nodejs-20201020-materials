function handler(req, res) {
  const now = Date.now();
  
  while (Date.now() < now + 2000) {}

  res.end('all ok');
}

module.exports = handler;
