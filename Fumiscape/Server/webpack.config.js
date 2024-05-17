const path = require('path');

module.exports = {
  mode: 'development', // O 'production' si estás en producción
  entry: './FumiScape/Fumiscape/Client/index.html', // El punto de entrada de tu aplicación
  output: {
    filename: 'Pasarela.js', // El nombre del archivo de salida
    path: path.resolve(__dirname, 'dist') // La carpeta de salida
  }
};
