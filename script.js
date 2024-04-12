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

// {
//   category: "Science: Computers",
//   type: "multiple",
//   difficulty: "easy",
//   question: "What does CPU stand for?",
//   correct_answer: "Central Processing Unit",
//   incorrect_answers: [
//     "Central Process Unit",
//     "Computer Personal Unit",
//     "Central Processor Unit",
//   ],
// }

//setInterval e clearInterval per il js (necessaria funzione che decrementa il timermax fino a 0 e poi lo resetta)

// contatore per le domande, verrà usato per sapere a che domanda siamo e per andare a cercare nell'array delle questions
let questionCounter = 0
// contatore per sapere quante domande ci sono nell'array
let numberOfQuestions = questions.length
// variabile che contiene la domanda attualmente gestita
let currentQuestion = questions[questionCounter]
// contatori per le risposte
let numberOfCorrectAnswers = 0
let numberOfWrongAnswers = 0
let numberOfSkippedAnswers = 0
// tempo massimo per rispondere alle domande
let startTime = 15
let timerDegrees = 360
let initialDgs = 360
let degPerSecond = timerDegrees / startTime


// funzione per passare alla domanda successiva
function getNextQuestion(){
  questionCounter += 1
  currentQuestion = questions[questionCounter]
}

// funzione per creare l'array che contiene tutte le risposte
function aggregateAnswers(question){
  let answers = [question.correct_answer].concat(question.incorrect_answers)
  return answers
}

// funzione per randomizzare un array (per non avere sempre la risposta giusta come ultimo o primo pulsante)
function randomizeArray(arr){
  for (let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1))
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return arr
}

// funzione per validare la risposta (deve essere utilizzata come onClikc dei pulsanti) e per incrementare i contatori
function validateAnswer(response){
  // se la risposta è giusta, allora correctAnswer = true, altrimenti è false
  let correctAnswer = response === currentQuestion.correct_answer ? true : false
  // se true (ripsposta giusta) allora aumento il contatore delle risposte giuste, altrimenti quello delle risposte sbagliate
  correctAnswer ? numberOfCorrectAnswers += 1 : numberOfWrongAnswers += 1
  // se siamo all'ultima domanda vado alla result page, altrimenti alla domanda successiva
  questionCounter === numberOfQuestions -1 ? goToResultsPage() : getNextQuestion()
  aggiornaQuiz(currentQuestion)
  
}

// funzione da richiamare quando il timer va a 0 e non è stata data una risposta
function skippedAnswer(){
  numberOfSkippedAnswers += 1
}

// funzione per raggiungere la pagina dei punteggi (necessario portarsi dietro i contatori con il local storage e pulire!)
function goToResultsPage(){
  localStorage.setItem("numberOfCorrectAnswers", numberOfCorrectAnswers)
  localStorage.setItem("numberOfWrongAnswers", numberOfWrongAnswers)
  localStorage.setItem("numberOfSkippedAnswers", numberOfSkippedAnswers)
  location.replace("resultPage.html")
}

// funzione per aggiornare gli elementi del quiz (domanda, buttons e contatore domanda attuale), a partire da una domanda
function aggiornaQuiz(question){

  initialDgs = timerDegrees
  // recupero i vari container per la domanda, i pulsanti e le il numero di domanda\tot domanda
  let questionContainer = document.getElementsByClassName("question")[0]
  let buttonsContainer = document.getElementsByClassName("upperButtons")[0]
  // pulisco il contenuto del contenitore dei pulsanti, se no ad ogni click se ne creerebbero di nuovi
  buttonsContainer.innerHTML = ''
  let currentQuestionContainer = document.getElementById("currentQuestion")
  let maxQuestionContainer = document.getElementById("maxQuestion")

  // aggiorno nr di domanda e tot domande
  currentQuestionContainer.innerText = questionCounter + 1
  maxQuestionContainer.innerText = '/' + numberOfQuestions

  // creo l'array con le risposte
  let answersArray = aggregateAnswers(question)
  
  // lo randomizzo
  answersArray = randomizeArray(answersArray)

  // aggiorno il testo della domanda 
  questionContainer.innerHTML = question.question
  
  // creo i button e li aggiungo al div che li deve contenere
  for (let a of answersArray){
    // creo il button
    let b = document.createElement("button")
    // gli modifico i valori di value, innerText e classname
    b.value = a
    b.innerText = a
    b.className = "responseButton"
    // aggiungo il monitoraggio dell'evento click, passandogli la funzione per validare la risposta
    b.addEventListener("click", () => {validateAnswer(a)})
    // aggiungo tutto al div dei pulsanti
    buttonsContainer.appendChild(b)
  }
  // resetto il timer e lo mostro
  maxTime = startTime
  showTimer(initialDgs)
}


// funzione per mostrare il timer
function showTimer(reduceDegrees){
  // recupero il contenitore in cui mettere il conteggio e quello che contiene il cerchio per il timer
  let timerContainer = document.getElementById("timer")
  let cpContainer = document.getElementById("circularProgress")
  // ci inserisco il valore attuale del timer
  timerContainer.innerText = maxTime
  // modifico il nr di gradi a cui è arrivato il cerchio
  cpContainer.style.background = `conic-gradient(#00ffff, ${reduceDegrees}deg, #d20094 0deg)`
}


// funzione per far passare il tempo del timer
function updateTimer(){
  // se siamo all'ultima domanda ed andiamo a 0 col timer, +1 per le risposte saltate e vado ai risultati
  if (maxTime === 0 && questionCounter === numberOfQuestions -1){
    skippedAnswer()
    goToResultsPage()
    clearInterval(t)
  }
  // se arriviamo a 0, ma non è l'ultima domanda, +1 per le risposte saltate e vado alla domanda successiva (e aggiorno la pagina)
  else if (maxTime === 0 && questionCounter < numberOfQuestions -1) {
    skippedAnswer()
    getNextQuestion()
    aggiornaQuiz(currentQuestion)
    
  }
  // altrimenti, proseguo col countdown
  else{
    maxTime -= 1
    initialDgs -= degPerSecond
    showTimer(initialDgs)
  }
}


// avvio il quiz con la prima domanda
aggiornaQuiz(currentQuestion)
// avvio il timer
const t = setInterval(updateTimer, 1000)