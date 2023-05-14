// const express = require('express');
// const https = require('https');
// const http = require('http');
// const app = express();

// app.use('/', (req, res) => {
//   const options = {
//     hostname: '84.201.135.211',
//     port: 8002,
//     path: req.url,
//     method: req.method,
//     headers: req.headers
//   };

//   const protocol = req.secure ? https : http;

//   const proxyReq = protocol.request(options, proxyRes => {
//     res.writeHead(proxyRes.statusCode, proxyRes.headers);
//     proxyRes.pipe(res, { end: true });
//   });

//   req.pipe(proxyReq, { end: true });
// });

// app.listen(3000, () => {
//   console.log('Proxy server started on port 3000');
// });