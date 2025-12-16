console.log("JS Ready to go");

/* Il programma dovrà chiedere all'utente il numero di chilometri 
   che vuole percorrere e l'età del passeggero */ 

const userTravelLenght = parseInt(prompt("Quanti chilometri percorrerai?","10"));
console.log("Chilometri previsti:", userTravelLenght, typeof userTravelLenght);

const userAge = parseInt(prompt("Quanti anni hai?", "18"));
console.log("Età utente:", userAge, typeof userAge);

/*Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
  il prezzo del biglietto è definito in base ai km (0.21 € al km) */

  const ticketStandard = userTravelLenght * 0.21; 
  console.log("Il prezzo base del biglietto è di:", ticketStandard, "€", typeof ticketStandard);

/* va applicato uno sconto del 20% per i minorenni
   va applicato uno sconto del 40% per gli over 65.
   L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
   Questo richiederà un minimo di ricerca. */

   const discountUnderAge = ticketStandard * 0.20;
   const discountOverAge = ticketStandard * 0.40;
   let finalTicketPrice; 

   if (userAge <=17) {
    finalTicketPrice = ticketStandard - discountUnderAge;
    console.log("Il prezzo del tuo biglietto è di:", finalTicketPrice.toFixed(2), "€");
   }

   else if (userAge >=65) {
    finalTicketPrice = ticketStandard - discountOverAge;
    console.log("Il prezzo del tuo biglietto è di:", finalTicketPrice.toFixed(2), "€");
   }

   else {
    finalTicketPrice = ticketStandard;
    console.log("Il prezzo del tuo biglietto è di:", finalTicketPrice.toFixed(2), "€");
   }
