const fs = require('fs');

let listarTabla = (base, limite) => {
    let data = "";
    console.log(`===== Tabla del ${base} =====`.blue);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i} \n`.green);
    }
    console.log(`=========================`.red);

}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('Esto no es un numero tío! joder coño!');
        }

        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }

        fs.writeFile(`Tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`El archivo tabla-${base.green}.txt ha sido creado`);
        });

    });


};

module.exports = {
    crearArchivo,
    listarTabla
}