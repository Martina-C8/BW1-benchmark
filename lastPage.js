// // Questa funzione viene chiamata quando l'utente clicca su una stella per dare un feedback.
// // Prende come argomento il numero di stelle selezionate.
// function rate(stars) {
//     // Iteriamo attraverso tutte le stelle possibili (nel nostro caso, 10 stelle).
//     for (let i = 1; i <= 10; i++) {
//         // Otteniamo il riferimento alla stella corrente.
//         const star = document.getElementById('star' + i);
//         // Se l'indice della stella è minore o uguale al numero di stelle selezionate,
//         // impostiamo il simbolo della stella a "★" (stella piena),
//         // altrimenti lo impostiamo a "☆" (stella vuota).
//         if (i <= stars) {
//             star.innerHTML = '★';
//         } else {
//             star.innerHTML = '☆';
//         }
//     }
// }

// Questa funzione viene chiamata quando l'utente clicca sul pulsante "Submit" per inviare il feedback.
function submitFeedback() {
    // Otteniamo il valore del feedback inserito dall'utente.
    const feedback = document.getElementById('feedback').value;
    // Visualizziamo una finestra di dialogo con il feedback inserito dall'utente.
    alert('Feedback submitted:\n' + feedback);
    // Qui potresti voler inviare i dati del feedback al server per ulteriore elaborazione.

}


// Definizione della funzione rate che prende in input il numero di stelle
function rate(stars) {
    // Ciclo che itera da 1 a 10 (il numero di stelle disponibili)
    for (let i = 1; i <= 10; i++) {
        // Ottieni un riferimento all'elemento HTML della stella corrente
        const star = document.getElementById('star' + i);
        
        // Controlla se l'indice corrente del ciclo è minore o uguale al numero di stelle
        if (i <= stars) {
            // Se sì, aggiungi la classe CSS 'clicked' all'elemento della stella corrente
            star.classList.add('clicked');
        } else {
            // Se no, rimuovi la classe CSS 'clicked' dall'elemento della stella corrente
            star.classList.remove('clicked');
        }
    }
}

