// server.js
const express = require('express');
const app = express();
const path = require('path');
const os = require('os');

// Serve arquivos estáticos (html, css, js)
app.use(express.static(path.join(__dirname, 'public')));

// Pega o IP da rede local para te mostrar onde acessar
const interfaces = os.networkInterfaces();
let localIP = 'localhost';
for (let devName in interfaces) {
    const iface = interfaces[devName];
    for (let i = 0; i < iface.length; i++) {
        const alias = iface[i];
        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
            localIP = alias.address;
        }
    }
}

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`\n==================================================`);
    console.log(`SERVIDOR RODANDO! ACESSE NO SEU NAVEGADOR:`);
    console.log(`👉 http://localhost:${PORT}`);
    console.log(`👉 http://${localIP}:${PORT}  (Para outros PCs/Celulares)`);
    console.log(`==================================================\n`);
});