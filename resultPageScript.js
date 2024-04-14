
// Ottieni il contesto del canvas
var ctx = document.getElementById('pie-chart').getContext('2d');

// Dati del grafico a torta
var data = {
   
    datasets: [{
        data: [4, 2], // Inserisci qui il numero di risposte corrette e sbagliate
        backgroundColor: ['#00ffff', '#d20094'], // Colori delle fette del grafico
        borderWidth: 0 // Spessore dei bordi delle fette
    }]
};

// Opzioni del grafico
var options = {
    responsive: false,
    maintainAspectRatio: false
};

// Crea il grafico a torta
var pieChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});