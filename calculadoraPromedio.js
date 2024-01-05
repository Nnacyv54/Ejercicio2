//ingresar nombre del estudiante
//la instruccion PROMPT recibe un valor por teclado y siempre es un string o cadena
let nombreEstudiante = prompt('Ingrese el nombre del estudiante:');
console.log(nombreEstudiante);
//ingresar nombre la materia
let nombreMateria = prompt('Ingrese el nombre de la materia:');
console.log(nombreMateria);
//numero de notas
const numeroNotas = 3;
let sumatoriaNotas = 0;
for (let contador = 1; contador <= numeroNotas; contador++) {
    //ingresar nota
    let notaEstudiante = prompt('Ingrese la nota ' + contador + ':');
    //convertir a numero la cadena ingresada
    let notaEstudianteNumero = Number(notaEstudiante);
    if (isNaN(notaEstudianteNumero)) {
        alert('Ingrese solo numeros...');
        break;
    } else {
        if (notaEstudianteNumero >= 0 && notaEstudianteNumero <= 10) {
            sumatoriaNotas = sumatoriaNotas + notaEstudianteNumero;
        } else {
            alert('Ingrese notas en un rango de 0 a 10...');
            break;
        }
    }
}
console.log(sumatoriaNotas);
//calcular promedio
let promedioEstudiante = sumatoriaNotas / numeroNotas;
console.log(promedioEstudiante);
//variable para mostrar el mensaje del promedio
let mensaje = '';
if (promedioEstudiante < 7) {
    mensaje = nombreEstudiante + ', gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es ' + promedioEstudiante.toFixed(2);
} else {
    mensaje = nombreEstudiante + ', ¡felicidades! Has aprobado con un promedio de ' + promedioEstudiante.toFixed(2);
}
alert(mensaje);