
// Se almacenan todas las variables necesariasb
const name = prompt(`Ingrese su nombre`, `John Doe`);
const course = prompt(`Ingrese su carrera`, `Fullstrack Javascript Trainee`);
const subject_1 = prompt(`Ingrese Curso 1`, `HTML`);
const subject_2 = prompt(`Ingrese Curso 2`, `CSS`);
const subject_3 = prompt(`Ingrese Curso 3`, `Javascript`);
const passing_grade =  parseFloat(prompt(`Ingrese nota de aprobación`, '4'));
const grade_1_subject_1 = parseFloat(prompt(`Ingrese nota 1 de del ramo ${subject_1}`, '1'));
const grade_2_subject_1 = parseFloat(prompt(`Ingrese nota 2 de del ramo ${subject_1}`, '1'));
const grade_3_subject_1 = parseFloat(prompt(`Ingrese nota 3 de del ramo ${subject_1}`, '1'));
const grade_1_subject_2 = parseFloat(prompt(`Ingrese nota 1 de del ramo ${subject_2}`, '1'));
const grade_2_subject_2 = parseFloat(prompt(`Ingrese nota 2 de del ramo ${subject_2}`, '1'));
const grade_3_subject_2 = parseFloat(prompt(`Ingrese nota 3 de del ramo ${subject_2}`, '1'));
const grade_1_subject_3 = parseFloat(prompt(`Ingrese nota 1 de del ramo ${subject_3}`, '1'));
const grade_2_subject_3 = parseFloat(prompt(`Ingrese nota 2 de del ramo ${subject_3}`, '1'));





// Armado de cuerpo html
document.write(`<div class='container'>`);
document.write(`<h1>Notas Finales</h1>`)
// Se muestra nombre y carrera
document.write(`<p>Nombre: ${name}</p>`)
document.write(`<p>Carrera: ${course}</p>`)
document.write(`<table class='table'>`);
// Armado de tabla
document.write(`<thead class='bg-dark text-white'>`);
document.write(`<tr>`);
document.write(`<th scope='col'>Ramo</th>`);
document.write(`<th scope='col'>Nota 1</th>`);
document.write(`<th scope='col'>Nota 2</th>`);
document.write(`<th scope='col'>Nota 3</th>`);
document.write(`<th scope='col'>Promedio</th>`);
document.write(`</tr>`);
document.write(`</thead>`);
document.write(`<tbody>`);
// Datos ramo 1 y calculo respectivo
document.write(`<tr>`);
document.write(`<td scope='row'>${subject_1}</th>`);
document.write(`<td>${grade_1_subject_1}</td>`);
document.write(`<td>${grade_2_subject_1}</td>`);
document.write(`<td>${grade_3_subject_1}</td>`);
document.write(`<td>${(grade_1_subject_1 + grade_2_subject_1 + grade_3_subject_1) / 3 }</td>`);
document.write(`</tr>`);
// Datos ramo 2 y calculo respectivo
document.write(`<tr>`);
document.write(`<td scope='row'>${subject_2}</th>`);
document.write(`<td>${grade_1_subject_2}</td>`);
document.write(`<td>${grade_2_subject_2}</td>`);
document.write(`<td>${grade_3_subject_2}</td>`);
document.write(`<td>${(grade_1_subject_2 + grade_2_subject_2 + grade_3_subject_2) / 3 }</td>`);
document.write(`</tr>`);
// Datos ramo 3 y calculo respectivo
document.write(`<tr>`);
document.write(`<td scope='row'>${subject_3}</th>`);
document.write(`<td>${grade_1_subject_1}</td>`);
document.write(`<td>${grade_2_subject_3}</td>`);
document.write(`<td>-</td>`);
document.write(`<td>-</td>`);
document.write(`</tr>`);
document.write(`</tbody>`);
document.write(`</table>`);
// Calculo de nota necesaria para aprobar el ramo 3
document.write(`<p>Para aprobar el ramo ${subject_3} con nota ${passing_grade} necesitas obtener un ${(passing_grade * 3) - (grade_1_subject_3 + grade_2_subject_3)} en la nota 3</p>`)
document.write(`</div>`);
