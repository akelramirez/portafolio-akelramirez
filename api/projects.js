const fs = require('fs');
const path = require('path');

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
    // Leer archivo JSON con los proyectos
    const dataPath = path.join(process.cwd(), 'data', 'projects.json');
    const fileContent = fs.readFileSync(dataPath, 'utf-8');
    const projects = JSON.parse(fileContent);
    
    res.status(200).json(projects);
  } catch (err) {
    console.error('Error reading projects file:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
