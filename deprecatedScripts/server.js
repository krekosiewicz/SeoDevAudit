const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Set the content type based on the file extension
  const filePath = path.join(__dirname, req.url);
  const extname = path.extname(filePath);
  let contentType = 'text/html';

  if (extname === '.csv') {
    contentType = 'text/csv';
  }

  // Serve index.html for the root URL
  if (req.url === '/') {
    const indexPath = path.join(__dirname, 'clsReport.html');
    fs.readFile(indexPath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
      }
    });
    return;
  }

  // Read other files and send them as the response
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

// Start the server on port 4044
const port = 4044;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});