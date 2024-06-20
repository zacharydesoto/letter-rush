import React, { useState } from "react"

export default function PreviousAnswers( {previousAnswers} ) {

    const answers = previousAnswers;

    return (
        <div>
            {previousAnswers.map((answer) => {
                return (
                    <div>
                        <p>{answer.word} {answer.score} {answer.rarity}</p>
                    </div>
                );
            })}
        </div>
    )
}