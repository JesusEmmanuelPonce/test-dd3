import { useState } from 'react';

import Keyboard from 'components/keyboard';
import InstructionsModal from 'components/InstructionsModal';
import "./scss/styles.scss";
import ScoreModal from 'components/ScoreModal';

const App = () => {

  const [openScore, setOpenScore] = useState<boolean>(true);
  const [openInstructions, setOpenInstructions] = useState<boolean>(false);

  return (
    <div className="App">
      <header className="App-header">
        <Keyboard />
        <p className=''>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <InstructionsModal
          open={openInstructions}
          onClose={() => setOpenInstructions(false)}
        />
        <ScoreModal
          open={openScore}
          onClose={() => setOpenScore(false)}
        />
      </header>
    </div>
  );
}

export default App;
