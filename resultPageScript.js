// Ottieni il contesto del canvas
var ctx = document.getElementById('pie-chart').getContext('2d');

// test values
// localStorage.setItem("numberOfCorrectAnswers", 6)
// localStorage.setItem("numberOfWrongAnswers", 3)
// localStorage.setItem("numberOfSkippedAnswers", 1)

// recupero le risposte dal local storage
let correctAnswers = parseInt(localStorage.getItem("numberOfCorrectAnswers"))
let wrongAnswers = parseInt(localStorage.getItem("numberOfWrongAnswers"))
let skippedAnswers = parseInt(localStorage.getItem("numberOfSkippedAnswers"))

// pulisco il local storage
localStorage.clear()

// variabili che conterranno gli elementi da pubblicare nel dom
let correctPercentage = 0
let correctNumbers = ''
let wrongPercentage = 0
let wrongNumbers = ''
// array per il grafico
let answArray = [correctAnswers, wrongAnswers + skippedAnswers]

// funzione per calcolare i valori
function calcualteResponsesNumbers(){
    // il totale delle domande è dato dalla somma dei tre contatori
    let totalQuestions = correctAnswers + wrongAnswers + skippedAnswers
    correctPercentage = ((correctAnswers / totalQuestions) * 100).toFixed(2)
    correctNumbers = `${correctAnswers}/${totalQuestions}`
    wrongPercentage = (((wrongAnswers + skippedAnswers) / totalQuestions) * 100).toFixed(2)
    wrongNumbers = `${wrongAnswers + skippedAnswers}/${totalQuestions}`
}

function showResultsNumbers(){
    document.getElementById("correctPercentage").innerHTML = `${correctPercentage}%`
    document.getElementById("wrongPercentage").innerHTML = `${wrongPercentage}%`
    document.getElementById("correctNumbers").innerText = correctNumbers + " questions"
    document.getElementById("wrongNumbers").innerText = wrongNumbers + " questions"
}

// Dati del grafico a torta
var data = {
    datasets: [{
        data: answArray, // Inserisci qui il numero di risposte corrette e sbagliate
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

function goToLastPage(){
    location.replace("lastPage.html")
}

calcualteResponsesNumbers()
showResultsNumbers()
