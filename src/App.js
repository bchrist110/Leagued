import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import './App.css';
import FindLeague from './FindLeague';
import League from './League';
import Team from './Team';
import LeaguedContext from './LeaguedContext';
import AddGameForm from './AddGameForm'
class App extends Component {
  state = {
    leagues: [],
    teams: [],
    games: [],
    players: [],
    error: null
  }
  setLeagues = leagues => {
    this.setState({
      leagues,
      error: null
    })
  }
  setTeams = teams => {
    this.setState({
      teams,
      error: null
    })
  }
  setGames = games => {
    this.setState({
      games,
      error: null
    })
  }
  setPlayers = players => {
    this.setState({
      players,
      error: null
    })
  }
  changeGameData = (gameid, gameData) => {
    const gameToFind = this.state.games.find(game => game.id.toString() === gameid.toString())
    const newGame = {
      id: gameid,
      leagueid: gameToFind.leagueid,
      hometeamid: gameToFind.hometeamid,
      awayteamid: gameToFind.awayteamid,
      date: gameToFind.date,
      name: gameToFind.name,
      hometeamscore: gameData.hometeamscore,
      hometeamassists: gameData.hometeamassists,
      hometeamthrees: gameData.hometeamthrees,
      hometeamsteals: gameData.hometeamsteals,
      hometeamblocks: gameData.hometeamblocks,
      awayteamscore: gameData.awayteamscore,
      awayteamassists: gameData.awayteamassists,
      awayteamthrees: gameData.awayteamthrees,
      awayteamsteals: gameData.awayteamsteals,
      awayteamblocks: gameData.awayteamblocks,
    }
    const indexToFind = this.state.games.findIndex(game => game.id === gameid)
    this.state.games.splice(indexToFind, 1, newGame)
  };
  componentDidMount() {
    fetch('https://immense-inlet-20379.herokuapp.com/api/leagues/', {
      method: 'GET',
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(this.setLeagues)
      .catch(error => this.setState({ error }))
    
    fetch('https://immense-inlet-20379.herokuapp.com/api/teams/', {
        method: 'GET',
      })
        .then(res => {
          if (!res.ok) {
            throw new Error(res.status)
          }
          return res.json()
        })
        .then(this.setTeams)
        .catch(error => this.setState({ error }))
    fetch('https://immense-inlet-20379.herokuapp.com/api/games/', {
          method: 'GET',
        })
          .then(res => {
            if (!res.ok) {
              throw new Error(res.status)
            }
            return res.json()
          })
          .then(this.setGames)
          .catch(error => this.setState({ error }))
          
    fetch('https://immense-inlet-20379.herokuapp.com/api/players/', {
            method: 'GET',
          })
            .then(res => {
              if (!res.ok) {
                throw new Error(res.status)
              }
              return res.json()
            })
            .then(this.setPlayers)
            .catch(error => this.setState({ error }))
  }
  render() {
    const contextValue = {
      leagues: this.state.leagues,
      teams: this.state.teams,
      games: this.state.games,
      players: this.state.players,
      changeGameData: this.changeGameData
    }
    return (
      <LeaguedContext.Provider value={contextValue}>
      <div className="App">
        <nav>
          <Nav />
        </nav>
        <header className="App-header">
          <h1>Leagued</h1>
          <h2>Bellevue Basketball Leagues</h2>
        </header>
        <main>
          <Route exact path='/' component={FindLeague} />
          <Route path='/league/:leagueid' component={League} />
          <Route exact path='/:leagueid/team/:teamname' component={Team} />
          <Route path='/AddGameStats/:gameid/:teamname/:leagueid' component={AddGameForm} />
        </main>
      </div>
      </LeaguedContext.Provider>
    );
  }
}
export default App;