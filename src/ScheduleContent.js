import React, { Component } from 'react';
import './ScheduleContent.css';

export default class ScheduleContent extends Component {
    render() {
        let {game} = this.props
        return (
            <div>
                <h4>Home: {game.hometeamscore}</h4>
                <h4>Away: {game.awayteamscore} </h4>
                <ul className="centered">
                    <li>Home Assists: {game.hometeamassists}</li>
                    <li>Home Threes: {game.hometeamthrees}</li>
                    <li>Home Steals: {game.hometeamsteals}</li>
                    <li>Home Blocks: {game.hometeamblocks}</li>
                    <br></br>
                    <li>Away Assists :{game.awayteamassists}</li>
                    <li>Away Threes: {game.awayteamthrees}</li>
                    <li>Away Steals: {game.awayteamsteals}</li>
                    <li>Away Blocks: {game.awayteamblocks}</li>
                </ul>
            </div>
        )
    }
}