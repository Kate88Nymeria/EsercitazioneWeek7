function confermaIscrizione() {
    let nome = document.getElementById("nome");
    let cognome = document.getElementById("cognome");
    let email = document.getElementById("mail");
    let frequenza = document.getElementById("frequenza");

    let message = 'Controlla i dati inseriti\n\nNome: ' + nome.value + '\nCognome: ' +
        cognome.value + '\nIndirizzo e-mail: ' + email.value + '\nFrequenza Newsletter: ' + frequenza.value + '\n\nConfermare?';

    confirm(message);
}

function totaleOrdine() {
    let libri = document.querySelectorAll('input[type=checkbox]:checked');

    let listaLibri = document.getElementById("listaLibri");

    if (libri.length == 0)
        return listaLibri.innerText = 'Totale: ' + 0.00 + '€';

    listaLibri.innerText = '';

    let somma = 0;
    for (let i = 0; i < libri.length; i++) {

        let titolo = libri[i].name + "N";
        let info = document.getElementsByName(titolo);

        if ((parseInt(info[0].value) != 1)) {
            somma = somma + parseFloat(libri[i].value) * parseInt(info[0].value);
        } else
            somma = somma + parseFloat(libri[i].value);
    }
    listaLibri.innerText = 'Totale: ' + somma + ' €';
}