// contatori per le risposte
let numberOfCorrectAnswers = 0
let numberOfWrongAnswers = 0
let numberOfSkippedAnswers = 0

// funzione per recuperare dal local storage i valori delle risposte
function getDataFromLocalStorage(){
    numberOfCorrectAnswers = localStorage.getItem("numberOfCorrectAnswers")
    numberOfWrongAnswers = localStorage.getItem("numberOfWrongAnswers")
    numberOfSkippedAnswers = localStorage.getItem("numberOfSkippedAnswers")

    console.log(`Correct: ${numberOfCorrectAnswers}, Wrong: ${numberOfWrongAnswers}, Skipped: ${numberOfSkippedAnswers}`)
    // pulizia del local storage dopo aver recuperato i dati
    localStorage.clear()
}

// funzione per mostrare i dati sul dom
function showResults(){
    let scoreContainer = document.getElementById("score")
    scoreContainer.innerText = `Correct: ${numberOfCorrectAnswers}, Wrong: ${numberOfWrongAnswers}, Skipped: ${numberOfSkippedAnswers}`
}

// esecuzione della funzione
getDataFromLocalStorage()
showResults()

function goToLastPage () {
    location.replace("lastPage.html")
}