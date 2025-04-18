import http from 'http';

const PORT = 8000;

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }


  const url = req.url;
  
  if (url.startsWith('/api')) {

    res.setHeader('Content-Type', 'application/json');
    
    if (url === '/api/hello') {
      res.writeHead(200);
      res.end(JSON.stringify({ message: 'Hello from the API!' }));
    } else if (url === '/api/data') {
      res.writeHead(200);
      res.end(JSON.stringify({ 
        data: [
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2' },
          { id: 3, name: 'Item 3' }
        ]
      }));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: 'API endpoint not found' }));
    }
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`API endpoints available at:`);
  console.log(`  - http://localhost:${PORT}/api/hello`);
  console.log(`  - http://localhost:${PORT}/api/data`);
});
