const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
// Cargamos variables de entorno desde .env si existe.
// Por defecto dotenv no sobreescribe variables del sistema; aquí forzamos la carga
// para desarrollo (NO usar esto en producción si compartes host con otras apps).
const dotenv = require('dotenv');
const dotenvResult = dotenv.config();
if (dotenvResult.error) {
  // no hay .env, no hacemos nada
  // console.warn('No .env encontrado');
} else if (dotenvResult.parsed) {
  // Sobrescribimos process.env con lo del archivo .env para evitar que vars
  // del sistema (por ejemplo otras apps) tomen prioridad durante desarrollo.
  Object.keys(dotenvResult.parsed).forEach((k) => {
    process.env[k] = dotenvResult.parsed[k];
  });
}

const app = express();
const PORT = process.env.PORT || 3001;

// DEBUG: muestra las credenciales de DB que se están usando (no dejar en producción)
console.log('DEBUG: DB_USER=', process.env.DB_USER, 'DB_NAME=', process.env.DB_NAME, 'DB_HOST=', process.env.DB_HOST);

app.use(cors());
app.use(express.json());

// Configuración de la conexión MySQL usando variables de entorno
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'usuario',
  password: process.env.DB_PASS || 'password123',
  database: process.env.DB_NAME || 'ejemplo_db'
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
    return;
  }
  console.log('Conectado a MySQL');
});

// Endpoint para obtener todos los proyectos
app.get('/api/projects', (req, res) => {
  db.query('SELECT * FROM projects', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
});
