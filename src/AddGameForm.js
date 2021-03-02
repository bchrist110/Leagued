import React, { Component } from 'react';
import LeaguedContext from './LeaguedContext';
import ValidationError from './ValidationError'

export default class AddGameForm extends Component {
    static contextType = LeaguedContext;

    constructor(props) {
        super(props);
        this.state = {
          homeScore: {
            value: 0,
            touched: false
          },
          homeAssists: {
            value: 0,
            touched: false
          },
          homeThrees: {
            value: 0,
            touched: false
          },
          homeSteals: {
            value: 0,
            touched: false
          },
          homeBlocks: {
            value: 0,
            touched: false
          },
          awayScore: {
            value: 0,
            touched: false
          },
          awayAssists: {
            value: 0,
            touched: false
          },
          awayThrees: {
            value: 0,
            touched: false
          },
          awaySteals: {
            value: 0,
            touched: false
          },
          awayBlocks: {
            value: 0,
            touched: false
          },
        }
    }

    updateHomeScore(score) {
        this.setState({homeScore: {value: score, touched: true}});
    }

    updateHomeAssists(score) {
        this.setState({homeAssists: {value: score, touched: true}});
    }

    updateHomeThrees(score) {
        this.setState({homeThrees: {value: score, touched: true}});
    }

    updateHomeSteals(score) {
        this.setState({homeSteals: {value: score, touched: true}});
    }

    updateHomeBlocks(score) {
        this.setState({homeBlocks: {value: score, touched: true}});
    }

    updateAwayScore(score) {
        this.setState({awayScore: {value: score, touched: true}});
    }

    updateAwayAssists(score) {
        this.setState({awayAssists: {value: score, touched: true}});
    }

    updateAwayThrees(score) {
        this.setState({awayThrees: {value: score, touched: true}});
    }

    updateAwaySteals(score) {
        this.setState({awaySteals: {value: score, touched: true}});
    }

    updateAwayBlocks(score) {
        this.setState({awayBlocks: {value: score, touched: true}});
    }

    validateHomeScore() {
        if (this.state.homeScore.touched === false) {
            return "Must Enter Home Score"
        }
        if (this.state.awayScore.value === this.state.homeScore.value) {
            return "Values Must Not Tie"
        }
    }

    validateHomeAssists() {
        if (this.state.homeAssists.touched === false) {
            return "Must Enter Home Assists"
        }
    }

    validateHomeThrees() {
        if (this.state.homeThrees.touched === false) {
            return "Must Enter Home Threes"
        }
    }

    validateHomeSteals() {
        if (this.state.homeSteals.touched === false) {
            return "Must Enter Home Steals"
        }
    }

    validateHomeBlocks() {
        if (this.state.homeBlocks.touched === false) {
            return "Must Enter Home Blocks"
        }
    }

    validateAwayScore() {
        if (this.state.awayScore.touched === false) {
            return "Must Enter Away Score"
        }
        if(this.state.awayScore.value === this.state.homeScore.value) {
            return "Values Must Not Tie"
        }
    }

    validateAwayAssists() {
        if (this.state.awayAssists.touched === false) {
            return "Must Enter Away Assists"
        }
    }

    validateAwayThrees() {
        if (this.state.awayThrees.touched === false) {
            return "Must Enter Away Threes"
        }
    }

    validateAwaySteals() {
        if (this.state.awaySteals.touched === false) {
            return "Must Enter Away Steals"
        }
    }

    validateAwayBlocks() {
        if (this.state.awayBlocks.touched === false) {
            return "Must Enter Away Blocks"
        }
    }

    handleClickBack = () => {
        this.props.history.push('/')
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {gameid} = this.props.match.params
        const {homeScore,homeAssists,homeThrees,homeSteals,homeBlocks,awayScore,awayAssists,awayThrees,awaySteals,awayBlocks} = this.state
        const gameData = {
            "hometeamscore": homeScore.value, 
            "hometeamassists": homeAssists.value, 
            "hometeamthrees": homeThrees.value, 
            "hometeamsteals": homeSteals.value, 
            "hometeamblocks": homeBlocks.value,
            "awayteamscore": awayScore.value,
            "awayteamassists": awayAssists.value,
            "awayteamthrees": awayThrees.value,
            "awayteamsteals": awaySteals.value,
            "awayteamblocks": awayBlocks.value
        }

        fetch(`https://immense-inlet-20379.herokuapp.com/api/games/${gameid}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(gameData)
        })
            .then(res => {
                if (!res.ok){
                    throw new Error ("BAD")
                    }
            })
            .then(this.context.changeGameData(gameid, gameData))
            .then(this.props.history.push('/'))
            .catch(error => {
                console.error(error)
            })
    }

    render() {
        let gameToFindId = this.props.match.params.gameid
        let teamname = this.props.match.params.teamname
        let team = this.context.teams.filter(team => team.name.toString() === teamname.toString())[0]
        let {games} = this.context
        let gameToFind = games.filter(game => game.id.toString() === gameToFindId.toString())[0]
        let hometeam = {}
        let awayteam = {}
        if (team.id === gameToFind.hometeamid) {
            hometeam = team
            awayteam = this.context.teams.filter(team => team.id.toString() === gameToFind.awayteamid.toString())[0]
        }
        else {
            awayteam = team
            hometeam = this.context.teams.filter(team => team.id.toString() === gameToFind.hometeamid.toString())[0]
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <button onClick={this.handleClickBack}>Go Back</button>
                <h2>Add Game Stats</h2>
                <div>
                    All Must Be Filled In, Score Must Not Tie
                </div>
                <div className="group">
                    <div className="item">
                        <h3>{hometeam.name}</h3>
                        <div>
                            <label>{hometeam.name} Score: </label>
                            <input type='number' min="0" onChange={e=>this.updateHomeScore(e.target.value)}></input>
                            {this.state.homeScore.touched && <ValidationError message={this.validateHomeScore()}/>}
                        </div>
                        <div>
                            <label>{hometeam.name} Assists: </label>
                            <input type='number' min="0" onChange={e=>this.updateHomeAssists(e.target.value)}></input>
                        </div>
                        <div>
                            <label>{hometeam.name} Threes: </label>
                            <input type='number' min="0" onChange={e=>this.updateHomeThrees(e.target.value)}></input>
                        </div>
                        <div>
                            <label>{hometeam.name} Steals: </label>
                            <input type='number' min="0" onChange={e=>this.updateHomeSteals(e.target.value)}></input>
                        </div>
                        <div>
                            <label>{hometeam.name} Blocks: </label>
                            <input type='number' min="0" onChange={e=>this.updateHomeBlocks(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="item">
                        <h3>{awayteam.name}</h3>
                        <div>
                            <label>{awayteam.name} Score: </label>
                            <input type='number' min="0" onChange={e=>this.updateAwayScore(e.target.value)}></input>
                            {this.state.awayScore.touched && <ValidationError message={this.validateAwayScore()}/>}
                        </div>
                        <div>
                            <label>{awayteam.name} Assists: </label>
                            <input type='number' min="0" onChange={e=>this.updateAwayAssists(e.target.value)}></input>
                        </div>
                        <div>
                            <label>{awayteam.name} Threes: </label>
                            <input type='number' min="0" onChange={e=>this.updateAwayThrees(e.target.value)}></input>
                        </div>
                        <div>
                            <label>{awayteam.name} Steals: </label>
                            <input type='number' min="0" onChange={e=>this.updateAwaySteals(e.target.value)}></input>
                        </div>
                        <div>
                            <label>{awayteam.name} Blocks: </label>
                            <input type='number' min="0" onChange={e=>this.updateAwayBlocks(e.target.value)}></input>
                        </div>
                    </div>
                </div>
                <button type="submit" disabled={
                    this.validateHomeScore() ||
                    this.validateHomeAssists() ||
                    this.validateHomeThrees() ||
                    this.validateHomeSteals() ||
                    this.validateHomeBlocks() ||
                    this.validateAwayScore() ||
                    this.validateAwayAssists() ||
                    this.validateAwayThrees() ||
                    this.validateAwaySteals() ||
                    this.validateAwayBlocks()
                }>Submit</button>
            </form>
        )
    }
}