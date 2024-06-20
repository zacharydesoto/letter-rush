import React, { useState } from "react"

export default function PreviousAnswers( {previousAnswers} ) {

    const answers = previousAnswers;

    if (Array.isArray(previousAnswers)) {
        console.log("Success - previousAnswers is an array:", previousAnswers);
    } else {
        console.log("Error - previousAnswers is not an array:", previousAnswers);
    }

    return (
        <div>
            {Array.isArray(previousAnswers) && previousAnswers.map((answer) => {
                return (
                    <div>
                        <p>{answer.word}  {answer.score}  {answer.rarity}</p>
                    </div>
                );
            })}
        </div>
    )
}