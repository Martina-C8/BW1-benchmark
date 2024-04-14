const calculateAndDisplayResults = () => {
    const totaleDomande = parseInt(localStorage.getItem('totaleDomande'));
    const corrette = parseInt(localStorage.getItem('corrette'));
    const saltate = parseInt(localStorage.getItem('saltate'));
    
   
    const correctPercentage = (corrette / totaleDomande) * 100;
    const incorrectPercentage = ((totaleDomande - corrette - saltate) / totaleDomande) * 100;
    const skippedPercentage = (saltate / totaleDomande) * 100;
    
    console.log=(correctPercentage, incorrectPercentage, skippedPercentage)
    
    document.getElementById('risultatoGiuste').innerText = `La percentuale di risposte giuste è: ${correctPercentage.toFixed(2)}%`;
    document.getElementById('risultatoSbagliate').innerText = `La percentuale di risposte sbagliate è: ${incorrectPercentage.toFixed(2)}%`;
    document.getElementById('risultatoSaltate').innerText = `La percentuale di risposte saltate è: ${skippedPercentage.toFixed(2)}%`;
};

document.addEventListener('DOMContentLoaded', calculateAndDisplayResults);