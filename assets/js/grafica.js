import 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js';
import 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js';


function mostrarGrafica(datos) {
    let graf = document.createElement('canvas');
    graf.classList.add('col-sm-6');
    graf.classList.add('graf');
    graf.getContext('2d');

    //console.log('longitud:',datos.length)

    if (datos.length === 4) {
        datos.unshift(['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']);
        
        // console.log(datos);
    }
    let janChart = new Chart(graf, {
        type: 'line',
        data: {
            labels: datos[0],
            datasets: [{
                    label: 'Open',
                    data: datos[1],
                    borderColor: [
                        'rgba(44, 109, 171, 0.5)'

                    ],
                    fill: false,
                },
                {
                    label: 'High',
                    data: datos[2],
                    borderColor: [
                        'rgba(89, 171, 44, 1)'
                    ],
                    fill: false,
                },
                {
                    label: 'Low',
                    data: datos[3],
                    borderColor: [
                        'rgba(215, 29, 17, 1)'
                    ],
                    fill: false,
                },
                {
                    label: 'Close',
                    data: datos[4],
                    borderColor: [
                        'rgba(144, 44, 171, 0.5)'
                    ],
                    fill: false,
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        }
    });

    return graf;
}
export { mostrarGrafica };