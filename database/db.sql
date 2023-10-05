CREATE TABLE IF NOT EXISTS attachment (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255),
    content TEXT NOT NULL,
    path TEXT NOT NULL
);

INSERT INTO attachment (name, content, path) VALUES
('avatar-image','dambrous-avatar.png', '../images/'),
('logo-rapsodoo','rapsodoo-logo.png', '../images/'),
('lampeo','lampeo1', '../images/'),
('lampeo','lampeo2', '../images/'),
('lampeo','lampeo3', '../images/'),
('univaq-logo','univaq-logo', '../images/'),
('ecampus-logo','ecampus-logo.png', '../images/'),
('cv','cv.pdf', '../documents/');
