import { ROLL, PICK } from "../type/DiceGameType"

export const rollAction = () => {
    return {
        type: ROLL,
    }
}

export const pickAction = (select) => {
    return {
        type: PICK,
        selection: select,
    }
}