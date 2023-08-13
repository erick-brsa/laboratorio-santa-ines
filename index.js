// const catalogue = [
// 	{
// 		name: '17 ALFA HIDROXIPROGESTERONA',
// 		primary_sample: 'SUERO 1 ML',
// 		recipent: 'TUBO ROJO',
// 		days_for_delivery: '4',
// 		price: 330,
// 		conditions: 'AYUNO DE 8 HORAS'
// 	},
// 	{
// 		name: '17 ALFA HIDROXIPROGESTERONA (NEONATAL)',
// 		primary_sample: '4 GOTAS DE SANGRE EN PAPEL FILTRO, SIN ALGÚN ADITIVO',
// 		recipent: 'PAPEL FILTRO',
// 		days_for_delivery: '9',
// 		price: 330,
// 		conditions:
// 			'TOMAR DESPUÉS DE LA SEGUNDA TOMA DE LECHE Ó A LAS 48HRS DE NACIMIENTO'
// 	},
// 	{
// 		name: '17 CETOESTEROIDES',
// 		primary_sample: 'ORINA DE 24 HRS. 30ML. INDICAR VOLUMEN.',
// 		recipent: 'FRASCO',
// 		days_for_delivery: '8',
// 		price: 700,
// 		conditions: 'ORINA DE 24 HRS. REFRIGERAR DURANTE LA RECOLECCIÓN'
// 	},
// 	{
// 		name: '17 HIDROXICORTICOESTEROIDES',
// 		primary_sample: 'ORINA DE 24 HRS. 30ML. INDICAR VOLUMEN.',
// 		recipent: 'FRASCO',
// 		days_for_delivery: '8',
// 		price: 720,
// 		conditions: 'ORINA DE 24 HRS. REFRIGERAR DURANTE LA RECOLECCIÓN'
// 	},
// 	{
// 		name: 'ACETAMINOFEN',
// 		primary_sample: 'SUERO 1 ML',
// 		recipent: 'TUBO ROJO',
// 		days_for_delivery: '6',
// 		price: 1000,
// 		conditions: 'AYUNO DE 8 HORAS'
// 	}
// ];

// let copy = [
//     ...catalogue,
//     copy.slice(0, 4).map(e => ({ name: '1' }))
// ];
// console.log(copy);

// Crear un array con 5 objetos
let array = [
    { name: "Persona 1", age: 25 },
    { name: "Persona 2", age: 30 },
    { name: "Persona 3", age: 22 },
    { name: "Persona 4", age: 28 },
    { name: "Persona 5", age: 32 }
  ];
  
  array.slice(0, 3).forEach(person => {
    person.age = 18;
  });
  
  array.slice(3).forEach(person => {
    person.age = 21;
  });
  
  console.log(array);
  