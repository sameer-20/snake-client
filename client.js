//


const net = require ('net');

// Establishes connection with the game server
const connect = function () {
  const conn = net.createConnection ({
    host: '135.23.222.131',
    port: 50541
  });
  conn.setEncoding('utf8'); // Interpret incoming data as text
  
  conn.on ('connect', () => {
    console.log("Successfully connected to game server");
  })

  conn.on('connect', () => {  
    conn.write("Name: S@m"); // Adding name to the snake
  })

  conn.on('data', () => {
    conn.write("Move: up");
  })

  conn.on('data', () => {
    conn.write("Move: left");
  })

  conn.on('data', () => {
    conn.write("Move: down");
  })

  conn.on('data', () => {
    conn.write("Move: right");
  })

  conn.on('data', (message) => {  // Logging message from the server
    console.log(message);
  }) 

  return conn;
};


module.exports = { connect };