import React, { Component } from 'react';
import LeaguedContext from './LeaguedContext';
import './Standing.css'

export default class Standing extends Component {
    static contextType = LeaguedContext;

    render() {
        let { team, league } = this.props
        let win = 0
        let loss = 0
        let {games} = this.context
        let leagueGames = games.filter(game => game.leagueid.toString() === league.toString())
        let teamGames = leagueGames.filter(game => game.hometeamid.toString() === team.id.toString() || game.awayteamid.toString() === team.id.toString())

        for (let i=0;i<teamGames.length;i++) {
            if (team.id === teamGames[i].hometeamid) {
                if (teamGames[i].hometeamscore > teamGames[i].awayteamscore) {{
                    win += 1
                }}
                if (teamGames[i].hometeamscore < teamGames[i].awayteamscore) {{
                    loss += 1
                }}
            }
            if (team.id === teamGames[i].awayteamid) {
                if (teamGames[i].awayteamscore > teamGames[i].hometeamscore) {
                    win += 1
                }
                if (teamGames[i].awayteamscore < teamGames[i].hometeamscore) {
                    loss += 1
                }
            }
        }

        return (
            <h4 className="standing" >Record: {win} - {loss} </h4>
        )
    }
}