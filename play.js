//

const net = require ('net');

// Establishes connection with the game server
const connect = function () {
  const conn = net.createConnection ({
    host: '135.23.222.131',
    port: 50541
  });
  conn.setEncoding('utf8'); // Interpret incoming data as text
  
  conn.on('connect', () => {  
    conn.write("Name: S@m"); // Adding name to the snake
  })

  conn.on('data', (message) => {  // Logging message from the server
    console.log(message);
  }) 

  return conn;
};


console.log('Connecting ...');
connect();