const { crearArchivo, crearArchivoProm, crearArchivoAsAw } = require('./helpers/multiplicar');
const argv = require('./config/yargs')
const colors = require('colors');

console.clear();


// console.log(argv.b);






// crearArchivo(base1);
// 
// crearArchivoProm(base2)
//     .then(nombreArchivo => console.log(nombreArchivo))
//     .catch(err => console.log(err));
// 


crearArchivoAsAw(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(colors.cyan(nombreArchivo)))
.catch(err => console.log(err));



