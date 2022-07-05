import { ROLL, PICK } from "../type/DiceGameType";

const stateDiceDefault = {
    selection: true,
    winingCount: 0,
    playCount: 0,
    diceArray: [
        { score: 1, imgSrc: './img/1.png' },
        { score: 2, imgSrc: './img/2.png' },
        { score: 3, imgSrc: './img/3.png' },
    ]
}

export const diceGameReducer = (state = stateDiceDefault, action) => {
    switch (action.type) {
        case PICK: {
            state.selection = action.selection;
            return { ...state };
        }

        case ROLL: {
            let diceArrayRandom = [];
            for (let i = 1; i <= 3; i++) {
                let randomNumber = Math.floor(Math.random() * 6) + 1;
                let randomDice = { score: randomNumber, imgSrc: `./img/${randomNumber}.png` }
                diceArrayRandom.push(randomDice);
            }
            state.diceArray = diceArrayRandom;
            let totalScore = diceArrayRandom.reduce((score, dice) => {
                return score + dice.score;
            }, 0)
            if ((totalScore > 11 && state.selection) || (totalScore <= 11 && !state.selection)) {
                state.winingCount += 1;
            }
            state.playCount += 1;
            return { ...state }
        }

        default: return { ...state };
    };
}