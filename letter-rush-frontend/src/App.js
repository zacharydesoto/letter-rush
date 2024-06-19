import React, { useState, useEffect } from 'react';
import { getFrequency } from './api/api';

function App() {
  const [word, setWord] = useState("");
  const [frequency, setFrequency] = useState(0);

  async function handleSubmit(e) {
    e.preventDefault();
    const frequency = await getFrequency(word);
    setFrequency(frequency);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Word: 
          <input type='text' value={word} onChange={(e) => setWord(e.target.value)} />
        </label>
        <button type='submit'>Submit</button>
      </form>
      <p>Frequency: {frequency}</p>
    </div>
  );
}

export default App;
