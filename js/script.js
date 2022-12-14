// Consegna:
// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata. Attenzione! Le immagini nello screenshot sono differenti da quelli  che vi invio, ma il layout non cambia.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.'
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos."
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city'
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.'
    }
];
console.log(images);

// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
//recupero tutti gli elementi Html di cui ho bisogno
const wrapperOneThumb = document.querySelector(".wrapperthumbs");
console.log(wrapperOneThumb);
const allThumbs = document.querySelector(".allthumbs");
console.log(allThumbs);
const cardPrincipalThumb = document.getElementsByClassName("cardThumb");
console.log(cardPrincipalThumb);
const thumbSecondary = document.getElementsByClassName("thumb");
console.log(thumbSecondary);
//Richiamo funzione per popolare in modo dinamico la tumbnail con l'immagine principale
pricipalThumb();
//Richiamo funzione per popolare in modo dinamico la thumbnail contenente tutte le immagini
addThumb();
//Rendo visibile solo la prima immagine 
let indexOfImg = 0 ; 
cardPrincipalThumb[indexOfImg].classList.remove("none");
thumbSecondary[indexOfImg].classList.remove("thumbactive");
//recupero bottini html 
const btnNext = document.getElementById("next");
console.log(btnNext);
const btnPrev = document.getElementById("prev");
console.log(btnPrev);

btnPrev.addEventListener("click" , clickPrev);
btnNext.addEventListener("click" , clickNext);
let addImage = setInterval(clickPrev , 2000);

let direction = true ; 
//recupero bottone per invertire ciclo
const btnInvert = document.getElementById("invert")
btnInvert.addEventListener("click" , function(){
    if(direction === true ){
        clearInterval(addImage);
        addImage = setInterval (clickNext , 2000);
        direction = false ; 
    } else {
        clearInterval(addImage);
        addImage = setInterval (clickPrev , 2000);
        direction = true ; 
    }
    
});
 
//recupero bottone per fermare scorrimento automatico 
const btnStop = document.getElementById("stop");
btnStop.addEventListener("click" , function(){
    clearInterval(addImage);
});






//UI FUNCTIONS
function pricipalThumb(){
    for ( let i = 0 ; i<images.length ; i++){
        const thisThumb = images[i];
        wrapperOneThumb.innerHTML += `
        <div class="cardThumb none">
            <img src=${thisThumb.image} alt="${thisThumb.image}">
            <div class="info">
                <h2>${thisThumb.title}</h2>
                <p>${thisThumb.text}</p>
            </div>
        </div>
        `
    }
}

function addThumb (){
    for ( let i = 0 ; i<images.length ; i++){
        const thisThumb = images[i];
        allThumbs.innerHTML += `
        <div class="thumb thumbactive">
            <img src=${thisThumb.image} alt="${thisThumb.image} ">
        </div>
        `
    }
}

// FUNCTION

function clickPrev (){
    cardPrincipalThumb[indexOfImg].classList.add("none");
    thumbSecondary[indexOfImg].classList.add("thumbactive");
    if (indexOfImg < cardPrincipalThumb.length - 1){
        indexOfImg++ ;
    }else{
        indexOfImg = 0 ; 
    }
    cardPrincipalThumb[indexOfImg].classList.remove("none");
    cardPrincipalThumb[indexOfImg].classList.add("active");
    thumbSecondary[indexOfImg].classList.remove("thumbactive");
}

function clickNext (){
    thumbSecondary[indexOfImg].classList.add("thumbactive");
    cardPrincipalThumb[indexOfImg].classList.add("none");
    if (indexOfImg > 0 ){
        indexOfImg-- ;
    }else{
        indexOfImg = 4 ; 
    }
    cardPrincipalThumb[indexOfImg].classList.remove("none");
    cardPrincipalThumb[indexOfImg].classList.add("active");
    thumbSecondary[indexOfImg].classList.remove("thumbactive");
}
