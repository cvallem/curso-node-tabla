const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base = 5) => {

    console.log(colors.rainbow('==================='));
    console.log(colors.blue(`    Tabla del: ${base}    `));
    console.log(colors.rainbow('==================='));

    let salida = '';

    for (let i = 1; i <= 10; i++) {
        salida += `${base} * ${i} = ${base * i} \n`;
    }

    console.log(salida);

    //fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    //    if (err) throw err;

    //    console.log(`tabla-${base}.txt creado ...`);
    //});

    fs.writeFileSync(`tabla-${base}.txt`, salida);
    console.log(`tabla-${base}.txt creado ...`);
}

const crearArchivoProm = (base = 5) => {

    return new Promise((resolve, reject) => {
        console.log('===================');
        console.log(`    Tabla del: ${base}    `);
        console.log('===================');

        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${base} * ${i} = ${base * i} \n`;
        }

        console.log(salida);
        
        fs.writeFileSync(`tabla-${base}.txt`, salida);

        const creado = fs.readFileSync(`tabla-${base}.txt`);

        (creado)
            ? resolve(`tabla-${base}.txt creado ...`)
            : reject('El archivo no fue creado');
    });
}

const crearArchivoAsAw = async (base = 5, listar = false, hasta = 12) => {
    
    try {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} ${'*'} ${i} ${'='} ${base * i} \n`;
            consola += `${colors.magenta(base)} ${'*'.green} ${colors.magenta(i)} ${'='.gray} ${colors.blue(base * i)} \n`;
        }

        if (listar) {
            console.log('========================'.green);
            console.log(`    ${'Tabla del:'.green} ${ colors.blue(base)} ${', hasta el:'.green} ${colors.blue(hasta)}   `);
            console.log('========================'.green);
            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt creado ...`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo,
    crearArchivoProm,
    crearArchivoAsAw
}


