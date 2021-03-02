import React, { Component } from 'react';
import './ScheduleButton.css';
import LeaguedContext from './LeaguedContext';
import { NavLink } from 'react-router-dom';


export default class ScheduleButton extends Component {
    static contextType = LeaguedContext;

    render() {
        let { game, index, team, teamsInLeague, leagueName, teamname } = this.props
        let hometeam, awayteam, otherteamid;
        if (team.id === game.hometeamid) {
                hometeam = team;
                otherteamid = game.awayteamid;
                awayteam = teamsInLeague.filter(team => team.id === otherteamid)[0]
        }
        else {
                awayteam = team
                otherteamid = game.hometeamid;
                hometeam = teamsInLeague.filter(team => team.id === otherteamid)[0]
        }

        return (
            <div className='item-double'>
                <button key={index} onClick={() => this.props.click(index)}>
                            {game.name} @ {hometeam.name} vs {awayteam.name} on {game.date}
                </button>
                <NavLink className="navlink" to={`/AddGameStats/${game.id}/${teamname}/${leagueName}`} activeClassName="selected">Add Game Stats</NavLink>
            </div>
        )
    }
}