//

let connection;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);
  return stdin;
}

const handleUserInput = function (key) {
  if (key === '\u0003') { // \u0003 maps to ctrl+c input
    process.exit();
  }
  if (key === 'w' || key === 'W') { 
    //console.log("up");
    connection.write(`Move: up`);
  }
  if (key === 'a' || key === 'A') { 
    //console.log("left");
    connection.write(`Move: left`);
  }
  if (key === 's' || key === 'S') { 
    //console.log("down");
    connection.write(`Move: down`);
  }
  if (key === 'd' || key === 'D') { 
    //console.log("right");
    connection.write(`Move: right`);
  }
  if (key === 'q' || key === 'Q') { 
    connection.write(`Say: DANGER!`);
  }
  if (key === 'e' || key === 'E') { 
    connection.write(`Say: Go Away!`);
  }
};


module.exports = { setupInput };

