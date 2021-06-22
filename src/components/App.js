import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm'
import { useState } from 'react';

const App = (props) => {

  const [players, setPlayers] = useState([
    {
      name: 'Shaneen',
      id: 1,
      score: 0
    },
    {
      name: 'Mark',
      id: 2,
      score: 0
    },
    {
      name: 'Bianx',
      id: 3,
      score: 0
    }
  ])

  // player id counter
  // let prevPlayerId = 3;

  const handleScoreChange = (oldScore, index, delta) => {
    setPlayers(players => players.map(p => {
      if (p.id - 1 !== index) return p
      return {...p, score: oldScore + delta}
    }))
  }

  const handleAddPlayer = (name) => {
  //   setPlayers(players => players.map(p => {
  //     return {...p, name, score: 0, id: prevPlayerId + 1}
  //   }))
    setPlayers([...players, {name, score: 0, id: players.length + 1}])
  }

  const handleRemovePlayer = (id) => {
    setPlayers(players => players.filter(p => p.id !== id))
  }

  return (
    <div className="scoreboard">
      <Header title="Scoreboard" players={players} />

      {/* Players list */}
      {players.map((player, index) => 
        <Player
          name={player.name}
          id={player.id}
          key={player.id}
          index={index}
          removePlayer={handleRemovePlayer}
          score={player.score}
          changeScore={handleScoreChange}
        />
      )}

      <AddPlayerForm addPlayer={handleAddPlayer}/>
    </div>
  );
}

export default App;
