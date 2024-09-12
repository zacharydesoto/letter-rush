import React from "react";
import { STATUS } from "../pages/Game";

export default function StatusMessage({ status, answer }) {
    let statusMessage;
    switch (status) {
        case STATUS.START_GAME:
            statusMessage = "Enter a word (4 or more letters) containing the letters shown.";
            break;
        case STATUS.INVALID_WORD:
            statusMessage = answer.word + " is not a valid word.";
            break;
        case STATUS.SHORT_WORD:
            statusMessage = answer.word + " is too short. Enter a word containing 4 or more letters.";
            break;
        case STATUS.DUPLICATE_WORD:
            statusMessage = "You have already entered " + answer.word + ". Enter a new word.";
            break;
        case STATUS.MULTIPLE_WORDS:
            statusMessage = "Enter a single word with no spaces."
            break;
        case STATUS.VALID_WORD:
            statusMessage = answer.word + " is a " + answer.rarity + " word worth " + answer.score + " points!";
            break;
        case STATUS.TIMEOUT:
            statusMessage = "You ran out of time!";
            break;
    }

    return (
        <p>
            {statusMessage}
        </p>
    )
}