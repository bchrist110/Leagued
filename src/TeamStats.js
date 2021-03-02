import React, { Component } from 'react';
import './TeamStats.css'

export default class TeamStats extends Component {
    render() {
        let {scheduleArr, team } = this.props
        let playedGames = [];
        let gamesPlayed = 0
        for (let i=0;i<scheduleArr.length;i++) {
            if (scheduleArr[i].hometeamscore !== 0 && scheduleArr[i].awayteamscore !== 0) {
                playedGames.push(scheduleArr[i])
                gamesPlayed += 1
            }
        }
        let totalPoints = 0;
        let totalAssists= 0;
        let totalThrees = 0
        let totalSteals = 0
        let totalBlocks = 0
        for (let i=0;i<playedGames.length;i++) {
            if (team.id === playedGames[i].hometeamid) {
                totalPoints += playedGames[i].hometeamscore
                totalAssists += playedGames[i].hometeamassists
                totalThrees += playedGames[i].hometeamthrees
                totalSteals += playedGames[i].hometeamsteals
                totalBlocks += playedGames[i].hometeamblocks
            }
            else {
                totalPoints += playedGames[i].awayteamscore
                totalAssists += playedGames[i].awayteamassists
                totalThrees += playedGames[i].awayteamthrees
                totalSteals += playedGames[i].awayteamsteals
                totalBlocks += playedGames[i].awayteamblocks
            }
        }

        let pointsPerGame = totalPoints/gamesPlayed;
        let assistsPerGame = totalAssists/gamesPlayed;
        let threesPerGame = totalThrees/gamesPlayed;
        let stealsPerGame = totalSteals/gamesPlayed;
        let blocksPerGame = totalBlocks/gamesPlayed;

        return (
            <div>
                <h2>Team Stats</h2>
                <p className="white">Total Points: {totalPoints}</p>
                <p className="white">Total Assists: {totalAssists}</p>
                <p className="white">Total Threes: {totalThrees}</p>
                <p className="white">Total Steals: {totalSteals}</p>
                <p className="white">Total Blocks: {totalBlocks}</p>
                <br></br>
                <p className="white">Points Per Game: {pointsPerGame.toFixed(1)}</p>
                <p className="white">Assists Per Game: {assistsPerGame.toFixed(1)}</p>
                <p className="white">Threes Per Game: {threesPerGame.toFixed(1)}</p>
                <p className="white">Steals Per Game: {stealsPerGame.toFixed(1)}</p>
                <p className="white">Blocks Per Game: {blocksPerGame.toFixed(1)}</p>
                <br></br>
            </div>
        )
    }
}