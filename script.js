/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function () {
  document.getElementsByTagName("h1")[0].innerText = "Titolo modificato con JS";
};

changeTitle();

/* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */

const addClassToTitle = function () {
  document.getElementsByTagName("h1")[0].classList.toggle("myHeading");
};

addClassToTitle();

/* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */

const changePcontent = function (text) {
  const pDiv = document.querySelectorAll("div p");
  for (let i = 0; i < pDiv.length; i++) {
    pDiv[i].innerText = text;
  }
};

changePcontent("Ho cambiato il testo dei p figli dei div");

/* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */

const changeUrls = function () {
  const urlGoogle = document.querySelectorAll("div a");
  for (let i = 0; i < urlGoogle.length; i++) {
    urlGoogle[i].setAttribute("href", "https://www.google.com");
  }
};

changeUrls();

/* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */

const addToTheSecond = function () {
  const newLi = document.createElement("li");
  newLi.innerText = "Aggiunto tramite JS";
  document.getElementById("secondList").appendChild(newLi);
};

addToTheSecond();

/* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */

const addParagraph = function () {
  const newP = document.createElement("p");
  newP.innerText = "Paragrafo aggiunto mediante JS";
  document.querySelector("div").appendChild(newP);
};

addParagraph();

/* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */

const hideFirstUl = function () {
  const hide = document.getElementById("firstList");
  hide.style.opacity = 0;
};

hideFirstUl();

/* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */

const paintItGreen = function () {
  const greenColor = document.querySelectorAll("ul");
  for (let i = 0; i < greenColor.length; i++) {
    greenColor[i].style.backgroundColor = "green";
  }
};

paintItGreen();

/* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */

const makeItClickable = function () {
  const array = document.getElementsByTagName("h1")[0].innerText.split("");
  array.pop();
  let sentence = array.join("");
  console.log(sentence);
  document.getElementsByTagName("h1")[0].innerText = sentence;
};

/* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */

const revealFooterLink = function () {
  const url = document.querySelector("footer a").href;
  alert(url);
};

/* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */

const generateTable = function () {
  const newTable = document.createElement("table");
  const tbody = document.createElement("tbody");
  const body = document.querySelector("body");

  for (let i = 0; i < 5; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 4; j++) {
      switch (j) {
        case 0:
          let cell = document.createElement("td");
          let image = document.createElement("img");
          image.setAttribute("src", "http://placekitten.com/80");
          cell.appendChild(image);
          row.appendChild(cell);
          break;
        case 1:
          let cell1 = document.createElement("td");
          let cellText1 = document.createTextNode("nome prodotto");

          cell1.appendChild(cellText1);
          row.appendChild(cell1);
          break;
        case 2:
          let cell2 = document.createElement("td");
          let cellText2 = document.createTextNode("quantità");

          cell2.appendChild(cellText2);
          row.appendChild(cell2);
          break;
        case 3:
          let cell3 = document.createElement("td");
          let cellText3 = document.createTextNode("prezzo");

          cell3.appendChild(cellText3);
          row.appendChild(cell3);
          break;
      }
    }
    tbody.appendChild(row);
  }
  newTable.appendChild(tbody);
  body.appendChild(newTable);
  newTable.setAttribute("id", "tableArea");
};

generateTable();

/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */

const addRow = function (image, product, quantity, price) {
  const tblBody = document.querySelector("table tbody");

  for (let i = 0; i < 1; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 4; j++) {
      switch (j) {
        case 0:
          let cell = document.createElement("td");
          let image = document.createElement("img");
          image.setAttribute("src", "http://placekitten.com/80");
          cell.appendChild(image);
          row.appendChild(cell);
          break;
        case 1:
          let cell1 = document.createElement("td");
          let cellText1 = document.createTextNode(product);

          cell1.appendChild(cellText1);
          row.appendChild(cell1);
          break;
        case 2:
          let cell2 = document.createElement("td");
          let cellText2 = document.createTextNode(quantity);

          cell2.appendChild(cellText2);
          row.appendChild(cell2);
          break;
        case 3:
          let cell3 = document.createElement("td");
          let cellText3 = document.createTextNode(price);

          cell3.appendChild(cellText3);
          row.appendChild(cell3);
          break;
      }
    }
    tblBody.appendChild(row);
  }
};

addRow("", "kitten", "1", "none");

/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */

const hideAllImages = function () {
  const imgHidden = document.querySelectorAll("table img");
  for (let i = 0; i < imgHidden.length; i++) {
    imgHidden[i].style.opacity = 0;
  }
};

// hideAllImages();

/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */

const changeColorWithRandom = function () {};
