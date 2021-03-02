import React, { Component } from 'react';
import Schedule from './Schedule';
import TeamMembers from './TeamMembers';
import LeaguedContext from './LeaguedContext';
import './Team.css';
import StandingForTeam from './StandingForTeam';
import TeamStats from './TeamStats';


export default class Team extends Component {
    static contextType = LeaguedContext;
    
    render() {
        let {teamname} = this.props.match.params
        let leagueToFind = this.props.match.params.leagueid
        let teamsInLeague = this.context.teams.filter(team => team.leagueid.toString() === leagueToFind.toString())
        let teamToFind = teamsInLeague.filter(team => team.name.toString() === this.props.match.params.teamname.toString())[0]
        let {games} = this.context
        let leagueGames = games.filter(game => game.leagueid.toString() === leagueToFind.toString())
        let teamGames = leagueGames.filter(game => game.hometeamid.toString() === teamToFind.id.toString() || game.awayteamid.toString() === teamToFind.id.toString())

        return (
            <div>
                <h2>{teamname}</h2>
                <StandingForTeam team={teamToFind} league={leagueToFind} />
                <hr className="ruler"></hr>
                <Schedule
                    schedule={teamGames}
                    teamname={teamname} 
                    leagueName={leagueToFind}
                    team={teamToFind}
                    teamsInLeague={teamsInLeague}
                />
                <hr className="ruler"></hr>
                <TeamStats scheduleArr={teamGames} 
                    team={teamToFind} />
                <hr className="ruler"></hr>
                <TeamMembers 
                    team={teamToFind} 
                    leagueName={leagueToFind} 
                />
            </div>
        )
    }
}

