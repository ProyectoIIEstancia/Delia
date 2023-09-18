const mysql = require('mysql');

// Configura la conexiÃ³n a la base de datos
const connection = mysql.createConnection({
  host: 'localhost', // Cambia esto a la direcciÃ³n de tu servidor MySQL
  user: 'Jenifer',
  password: '12345',
  database: 'usuarios',
});

// Conecta a la base de datos


connection.connect((err) => {
    if (err) {
      console.error('Error al conectar a la base de datos: ' + err.message);
    } else {
      console.log('ConexiÃ³n a la base de datos exitosa');
  
      connection.query('SELECT * FROM usuarios', (err, rows) => {
           if (err) {
          console.error('Error en la consulta: ' + err.message);
          } else {
          console.log('Resultado de la consulta:', rows);
          }
          });
   
    }
  });