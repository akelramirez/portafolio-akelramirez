const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Endpoint para obtener todos los proyectos desde el archivo JSON
app.get('/api/projects', (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'data', 'projects.json');
    const fileContent = fs.readFileSync(dataPath, 'utf-8');
    const projects = JSON.parse(fileContent);
    res.json(projects);
  } catch (err) {
    console.error('Error reading projects file:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
});
