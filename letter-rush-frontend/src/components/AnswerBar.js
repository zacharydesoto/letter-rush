import React, { useState } from "react"
import { getFrequency } from "../api/api";

export default function AnswerBar(props) {
    const [word, setWord] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        const frequency = await getFrequency(word);
        props.setFrequency(frequency);
      }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Word:
                <input type='text' className='font-bold underline text-3xl text-wrap' value={word} onChange={(e) => setWord(e.target.value)} />
            </label>
            <div className='font-bold text-3xl'>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}