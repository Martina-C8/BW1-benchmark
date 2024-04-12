    const questions = [
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
          "Central Process Unit",
          "Computer Personal Unit",
          "Central Processor Unit",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
      },
      {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question:
          "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
          "Counter Strike: Source",
          "Corrective Style Sheet",
          "Computer Style Sheet",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
          "Ice Cream Sandwich",
          "Jelly Bean",
          "Marshmallow",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
      },
      {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
      },
    ];

    // Funzione java script per controllare la risposta selezionatae 
//+ 1 contatore risposte giuste se risposta giusta
//+ 1 contatore risposte sbagliate se risposta sbagliata
//+ 1 contatore risposte mancate se riposta non data


//inizializzazione dei contatori 
let rightAnswer = 0
let falseAnswer = 0
let missAnswer = 0

//funzione per controllare la risposta 
function controllaRisposta(rispostaData, rispostaCorretta) {
    if(rispostaData === null || rispostaData === '') {
       // nessuna risposta data
       missAnswer += 1
    } else if (rispostaData === rispostaCorretta) {
        // Risposta giusta
        rightAnswer +=1
    } else {
        //Risposta sbagliata
        falseAnswer += 1

    }

    }


  

    // Aggiungere nell`HTML con l'id timer per visualizzare il countdown, come <div id="timer"></div>


   //Funzione per passare alla prossima domanda (che si attiva sia su timer a 0, sia su risposta data) e passare alla pagina del punteggio finale, se abbiamo finito le domande

   let indiceDomandaCorrente = 0; // Indice della domanda corrente
   const domande = [] // Array delle  domande
   let timerId //variabile per tenere traccia del timer 
   let TimerIddiv = document.getElementById ("timer")
   let durata = 30 

   function avviaTimer (durata) {
    clearInterval (timerId) //resetta il timer esistente

    let tempoRimasto = durata
    TimerIddiv.innerText = 'Tempo rimasto: ${tempoRimasto}s'


   /* timerId = setInterval(() => {tempoRimasto--
    Document.getElementById('timer').textContent = 'Tempo rimasto: ${tempoRimasto}s'
    
    if (tempoRimasto <= 0) {
      clearInterval(timerId)
      passaAllaDomandaSuccesiva()
    }
    
  },1000)
  */
 
   }
   
   function passaAllaDomandaSuccesiva(){
    //logica per passare alla prossima domanda 
    console.log ('Passaggioa alla prossima Domanda')
   }

   //avviare il timer con 30 secondi
   avviaTimer(30)

// Funzione per prendere i risultati del quiz dal localStorage 
function storeQuizResults(totaleDomande, corrette, saltate) {
  localStorage.setItem('totaleDomande', totaleDomande);
  localStorage.setItem('corrette', corrette);
  localStorage.setItem('saltate', saltate); // Aggiungi anche le risposte saltate
}

// Funzione per calcolare e far apparire nel console log le risposte corrette, incorrette e saltate
function calculateAndDisplayResults() {
  const totaleDomande = parseInt(localStorage.getItem('totaleDomande'));
  const corrette = parseInt(localStorage.getItem('corrette'));
  const saltate = parseInt(localStorage.getItem('saltate'));
  
  const correctPercentage = (corrette / totaleDomande) * 100;
  const incorrectPercentage = ((totaleDomande - corrette - saltate) / totaleDomande) * 100;
  const skippedPercentage = (saltate / totaleDomande) * 100; 
 
  
  document.getElementById(`risultatoGiuste).innertext = 'La percentuale è: ${correctPercentage.toFixed(2)}%`);
  document.getElementById(`risultatoSbagliate).innertext = 'La percentuale è: ${correctPercentage.toFixed(2)}%`);
  document.getElementById(`risultatoSaltate).innertext = 'La percentuale è: ${correctPercentage.toFixed(2)}%`);

}


calculateAndDisplayResults(); // Calcolare e far apparire sul display i risultati

