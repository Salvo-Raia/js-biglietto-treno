console.log("JS Ready to go");

/* Il programma dovrà chiedere all'utente il numero di chilometri 
   che vuole percorrere e l'età del passeggero */ 

const userTravelLenght = parseInt(prompt("Quanti chilometri percorrerai?"));
console.log("Chilometri selezionati:", userTravelLenght, typeof userTravelLenght);

const userAge = parseInt(prompt("Quanti anni hai?"));
console.log("Età utente:", userAge, typeof userAge);

/*Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
  il prezzo del biglietto è definito in base ai km (0.21 € al km) */

  const ticketStandardPrice = userTravelLenght * 0.21; 
  console.log("Il prezzo base del biglietto è di:", ticketStandardPrice, "€", typeof ticketStandardPrice);