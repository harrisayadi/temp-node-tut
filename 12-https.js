const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to our home page');
    return;
  }
  if (req.url === '/about') {
    res.end(`Here is our short history`);
    return;
  }

  res.end(`
  <h1>Ops</h1>
<p>page can't be found</p>
<a href="/">back home</a>
`);
});

server.listen(5000);
