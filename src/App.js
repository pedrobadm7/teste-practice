import { useState } from 'react';
import { Dropdown } from "./components/Dropdown";

function App() {

  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <div>

      {selectedPokemon && <div>Seu Pokemon é: {selectedPokemon}</div>}

      <Dropdown
        title="Selecione seu pokemon inicial"
        options={['Bulbasaur', 'Squirtle', 'Charmeleon']}
        onSelect={setSelectedPokemon}
      />
    </div>
  );
}

export default App;
