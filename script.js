const nbWords = 100;

async function getWords() {
    // get the list of words from the json file
    const response = await fetch('words.json');
    const data = await response.json();
    console.log(data.words);
    return data.words;
}

function getRandomInt(max) {
    // get random number between 0 and max
    return Math.floor(Math.random() * max);
}

function generateTexte(words,nbWords) {
    // generate a list of text with 100 words from the words list
    let texte = [];
    const max = words.length;
    for (let i = 0; i < nbWords; i++) {
        texte.push(words[getRandomInt(max)]);
    }
    console.log(texte);
    return texte;
}

async function initGame() {
    // init the game for ready to start

    // get the list of words
    const words = await getWords();

    // remove the start button
    const startButton = document.getElementById('startButton');
    startButton.innerText = 'Restart';

    // remove the previous text and input
    let oldTexte = document.getElementById('texte');
    if (oldTexte) {
        oldTexte.remove();
    }
    let oldInput = document.getElementById('input');
    if (oldInput) {
        oldInput.remove();
    }

    // remove the end text
    let endTexte = document.getElementById('endTexte');
    if (endTexte) {
        endTexte.remove();
    }

    // generate the text
    let texte = document.createElement('p');
    texte.id = 'texte';
    texteGenerated = generateTexte(words,nbWords);
    for (let i = 0; i < nbWords; i++) {
        let mot = document.createElement('span');
        mot.id = 'mot' + i;
        mot.innerText = texteGenerated[i] + " ";
        texte.appendChild(mot);
    }
    document.body.appendChild(texte);

    let input = document.createElement('input');
    input.id = 'input';
    input.type = 'text';
    input.placeholder = 'Start typing...';
    input.addEventListener('input', startGame);
    document.body.appendChild(input);

    score = 0;
    motCount = 0;
}

function startGame() {
    // start the game
    let input = document.getElementById('input');
    inputTexte = input.value;
    texteCorrection = texteGenerated
    if (inputTexte.includes(" ")) {
        // verify each words in the input
        input.value = '';
        idMot = 'mot' + motCount;
        if (inputTexte.trim().toLowerCase() === texteCorrection[0].trim().toLowerCase()) {
            let mot = document.getElementById(idMot);
            mot.style.color = 'green';
            texteCorrection.shift();
            score += 1;
        } else {
            let mot = document.getElementById(idMot);
            mot.style.color = 'red';
            texteCorrection.shift();
        }
        motCount += 1;
        if (motCount === nbWords) {
            // end of the game
            input.remove();
            let endTexte = document.createElement('p');
            endTexte.innerText = 'Game Over! Your score is ' + score + '/'+ nbWords +'. Press Restart to play again.';
            endTexte.id = 'endTexte';
            document.body.appendChild(endTexte);
            return;
        }
    }
}
