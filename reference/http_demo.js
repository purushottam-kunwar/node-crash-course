const http = require('http');

// Create Server
http
  .createServer((req, res) => {
    // Wite Response
    res.write('Hello World');
    res.end();
  })
  .listen(5000, () => console.log('Server Running.....'));
