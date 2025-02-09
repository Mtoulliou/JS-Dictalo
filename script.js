const words = {
    "easy": [
        "le", "de", "un", "être", "et", "à", "il", "avoir", "ne", "je",
        "son", "que", "se", "qui", "ce", "dans", "en", "du", "elle", "au",
        "avec", "pour", "pas", "vous", "par", "sur", "faire", "plus", "dire", "me",
        "on", "mon", "lui", "nous", "comme", "mais", "ils", "ou", "si", "leur",
        "tout", "y", "bien", "où", "peu", "voir", "quelque", "sans", "autre", "quand",
        "très", "même", "prendre", "aussi", "donner", "temps", "ses", "notre", "dont", "rien",
        "alors", "moi", "être", "savoir", "aller", "avant", "devoir", "venir", "pendant", "juste",
        "contre", "après", "personne", "dernier", "toujours", "certain", "aucun", "grand", "petit", "jour",
        "femme", "homme", "nom", "grand", "place", "gens", "enfant", "chose", "voix", "pied",
        "oeil", "tête", "bras", "visage", "coeur", "main", "noir", "blanc", "bleu", "rouge",
        "long", "court", "nouveau", "vieux", "premier", "dernier", "mieux", "mal", "fort", "faible",
        "heure", "minute", "semaine", "mois", "année", "hier", "aujourd'hui", "demain", "matin", "soir",
        "nuit", "heureux", "triste", "jeune", "vieux", "riche", "pauvre", "chaud", "froid", "sec",
        "humide", "faim", "soif", "malade", "fatigué", "content", "calme", "nerveux", "facile", "difficile",
        "possible", "impossible", "vrai", "faux", "intéressant", "ennuyeux", "important", "inutile", "beau", "laid",
        "gros", "mince", "rapide", "lent", "léger", "lourd", "proche", "loin", "propre", "sale",
        "jeune", "ancien", "fort", "bruyant", "silencieux", "vide", "plein", "haut", "bas", "large",
        "étroit", "court", "long", "dur", "mou", "sucré", "amer", "salé", "acide", "bon",
        "mauvais", "cher", "pas cher", "chaud", "froid", "humide", "sec", "neuf", "usé", "vivant",
        "mort", "facile", "difficile", "possible", "impossible", "intéressant", "ennuyeux", "heureux", "triste", "riche",
        "pauvre", "sympathique", "antipathique", "gentil", "méchant", "intelligent", "bête", "drôle", "sérieux", "fatigué",
        "éveillé", "endormi", "occupé", "libre", "pressé", "lent", "rapide", "fort", "faible", "bruyant",
        "silencieux", "propre", "sale", "humide", "sec", "chaud", "froid", "bon", "mauvais", "grand",
        "petit", "large", "étroit", "gros", "mince", "épais", "fin", "dur", "mou", "sucré",
        "amer", "salé", "acide", "piquant", "fade", "léger", "lourd", "clair", "foncé", "lumineux",
        "sombre", "heure", "minute", "seconde", "jour", "semaine", "mois", "année", "printemps", "été", "automne",
        "hiver", "matin", "midi", "après-midi", "soir", "nuit", "hier", "aujourd'hui", "demain", "lundi",
        "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche", "instant", "moment", "début", "fin", "tôt",
    ]
}
function getRandomInt(max) {
    // get random number between 0 and max
    return Math.floor(Math.random() * max);
}

function generateTexte(words) {
    // generate a list of text with 100 words from the words list
    let texte = [];
    const max = words.easy.length;
    for (let i = 0; i < 100; i++) {
        texte.push(words.easy[getRandomInt(max)]);
    }
    console.log(texte);
    return texte;
}

async function startGame() {
    // init the game for ready to start
    //const words = await fetch("./words.json")
    //    .then(response => response.json())
    //    .then(data => data.words);
    console.log(words.easy[0]);
    const startButton = document.getElementById('startButton');
    startButton.remove();
    let texte = document.createElement('p');
    texte.innerText = generateTexte(words);
}