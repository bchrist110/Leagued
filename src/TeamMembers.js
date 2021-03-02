import React, { Component } from 'react';
import LeaguedContext from './LeaguedContext';
import './TeamMembers.css';

export default class TeamMembers extends Component {
    static contextType = LeaguedContext;

    render() {
        let{ team } = this.props
        let { players } = this.context
        let teammembers = players.filter(player => player.teamid.toString() === team.id.toString())

        return (
            <div>
                <h2>Team Members</h2>
                <ul>
                    {teammembers.map((player, i) =>
                        <li key={i}>
                            <ul className="centerlist">
                                <li>Name: {player.name}</li>
                                <li>Role: {player.role}</li>
                                <li>Phone: {player.phone}</li>
                            </ul>
                            <br></br>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}