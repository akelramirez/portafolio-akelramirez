const mysql = require('mysql2/promise');

// Pool a nivel de módulo para reutilizar conexiones entre invocaciones
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'usuario',
  password: process.env.DB_PASS || 'password123',
  database: process.env.DB_NAME || 'ejemplo_db',
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
});

module.exports = async (req, res) => {
  // CORS básico (ajusta en producción según tu dominio)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.status(204).end();
    return;
  }

  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const [rows] = await pool.query('SELECT * FROM projects');
    res.status(200).json(rows);
  } catch (err) {
    console.error('DB query error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
