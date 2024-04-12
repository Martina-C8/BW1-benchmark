// Questa parte del codice ascolta l'evento di caricamento del documento HTML.
document.addEventListener('DOMContentLoaded', function() {
    // Viene selezionato l'elemento checkbox con l'id 'agree' e memorizzato nella variabile 'checkbox'.
    var checkbox = document.getElementById('agree');
    // Viene selezionato il pulsante con l'id 'proceed-btn' e memorizzato nella variabile 'btnProceed'.
    var btnProceed = document.getElementById('proceed-btn');

    // Viene aggiunto un listener per l'evento 'change' all'elemento checkbox.
    checkbox.addEventListener('change', function() {
        // Quando lo stato del checkbox cambia, questo codice viene eseguito.
        // Il pulsante 'btnProceed' viene disabilitato se il checkbox non è selezionato, altrimenti viene abilitato.
        btnProceed.disabled = !checkbox.checked;
    });

    // Viene aggiunto un listener per l'evento 'click' al pulsante 'btnProceed'.
    btnProceed.addEventListener('click', function() {
        // Quando il pulsante viene cliccato, questo codice viene eseguito.
        // Verifica se il checkbox è selezionato.
        if (checkbox.checked) {
            // Se il checkbox è selezionato, reindirizza l'utente alla pagina 'quizPage.html'.
            window.location.href = 'quizPage.html';
        } else {
            // Se il checkbox non è selezionato, mostra un messaggio di avviso.
            alert('Devi accettare le condizioni per proseguire.');
        }
    });
});

