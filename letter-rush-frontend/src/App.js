import React, { useState, useEffect } from 'react';
import { getFrequency } from './api/api';
import Game from './pages/Game';

function App() {
  return (
    <div>
      <Game />
    </div>
  );
}

export default App;
