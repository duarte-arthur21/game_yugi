const state = {
    score: {
        playerScore: 0,
        computerScore:0,
        scoreBox: document.getElementById("score_points"),
    },
    cardSprites:{
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type"),
    },
    fielCards: {
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card"),
    },
    actions:{    
        button: document.getElementById("next-duel"),
    },
};

const pathImages = ".scr/assets/icons/";

const cardData = [
    {
        id:1,
        name: "Dark Magician",
        type: "Rock",
        img: '${pathImages}"magician.png"',
        WinOf:[1], //De quem a carta ganha
        LoseOf:[2] //De quem a carta perde
    },
    {
        id:2,
        name: "Exodia",
        type: "Scissors",
        img: '${pathImages}"exodia.png"',
        WinOf:[0], //De quem a carta ganha
        LoseOf:[1] //De quem a carta perde
    },
];

// const players = {
//     player1: "player-cards",
// };

function init() {
    // state.cardSprites.name = 
    // players.player1
};

init();