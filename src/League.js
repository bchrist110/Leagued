import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LeaguedContext from './LeaguedContext';
import './League.css';
import Standing from './Standing'

export default class League extends Component {
    static contextType = LeaguedContext;

    render() {
        let leagueToFind = this.props.match.params.leagueid
        let teamsInLeague = this.context.teams.filter(team => team.leagueid.toString() === leagueToFind.toString())

        return (
            <div>
                <h3>Select Team</h3>
                {teamsInLeague.map((team, i) =>
                    <li key={i} value={team}>
                        <NavLink className="navlink" to={`/${leagueToFind}/team/${team.name}`} activeClassName="selected">
                            {team.name}
                        </NavLink>
                    </li>                    
                )}
                <h3>League Standings</h3>
                <ul>
                    {teamsInLeague.map((team, i) => 
                        <li>
                            <Standing team={team} league={leagueToFind} />
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}