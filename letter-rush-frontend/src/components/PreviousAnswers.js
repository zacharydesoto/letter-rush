import React from "react"

export default function PreviousAnswers( {previousAnswers} ) {
    return (
        <div>
            {previousAnswers.map((answer) => {
                return (
                    <div>
                        <p key={answer.word}>{answer.word} {answer.score} {answer.rarity}</p>
                    </div>
                );
            })}
        </div>
    )
}