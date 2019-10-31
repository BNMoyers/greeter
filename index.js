const express = require('express');

const server = express(); // creating an instance of an express server

server.get('/', (req, res) => {
  res.status(200).json({ hello: 'Web 23' });
});


// the port is coming from the environment
const port = process.env.port || 4000;

//in this case, the port will be set by heroku when we deploy

server.listen(port, () => {
  console.log('\n Server running on port 4000 \n');
});
