import Header from './Header';
import Player from './Player';
import { useState } from 'react';

const App = (props) => {

  const [players, setPlayers] = useState([
    {
      name: 'Shaneen',
      id: 1
    },
    {
      name: 'Mark',
      id: 2
    },
    {
      name: 'Bianx',
      id: 3
    }
  ])

  const handleRemovePlayer = (id) => {
    setPlayers(players => players.filter(p => p.id !== id))
  }

  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={players.length} />

      {/* Players list */}
      {players.map(player => 
        <Player
          name={player.name}
          id={player.id}
          key={player.id.toString()}
          removePlayer={handleRemovePlayer}
        />
      )}
    </div>
  );
}

export default App;
