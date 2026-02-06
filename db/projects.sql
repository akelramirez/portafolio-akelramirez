-- Crea la tabla de proyectos
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_url VARCHAR(512),
    project_url VARCHAR(512)
);

-- Inserta proyectos de ejemplo
INSERT INTO projects (title, description, image_url, project_url) VALUES
('Portafolio Personal', 'Mi portafolio web con mis proyectos y contacto.', 'https://ejemplo.com/imagen1.png', 'https://ejemplo.com/portafolio'),
('E-commerce Demo', 'Tienda en línea de ejemplo con carrito y pagos.', 'https://ejemplo.com/imagen2.png', 'https://ejemplo.com/ecommerce'),
('Blog Técnico', 'Blog para compartir artículos de tecnología y programación.', 'https://ejemplo.com/imagen3.png', 'https://ejemplo.com/blog');
