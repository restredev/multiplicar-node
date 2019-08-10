const argv = require('yargs').command('listar', 'imprime en consola la tabla de multiplicar', {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}).command('crear', 'Crea el archivo', {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}).help().argv;
const { crearArchivo } = require("./Multiplicar/multiplicar");
const { listarTabla } = require('./Multiplicar/multiplicar');

const comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log(argv.base, argv.limite);
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log(argv.base, argv.limite);
        crearArchivo(argv.base, argv.limite).then(mensaje => {
            console.log(mensaje);
        }).catch(err => {
            console.log(err);
        });
        break;
    default:
        console.log('Comando no reconocido');
        break;
}