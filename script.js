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

function generateTexte(words) {
    // generate a list of text with 100 words from the words list
    let texte = [];
    const max = words.length;
    for (let i = 0; i < 100; i++) {
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

    // generate the text
    let texte = document.createElement('p');
    texte.id = 'texte';
    texteGenerated = generateTexte(words);
    for (let i = 0; i < 100; i++) {
        texte.innerText += texteGenerated[i] + " ";
    }
    document.body.appendChild(texte);

    let input = document.createElement('input');
    input.id = 'input';
    input.type = 'text';
    input.placeholder = 'Start typing...';
    input.addEventListener('input', startGame);
    document.body.appendChild(input);
}

function startGame() {
    // start the game
    console.log('Game started');
}
