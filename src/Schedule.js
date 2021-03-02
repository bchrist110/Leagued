import React, { Component } from 'react';
import LeaguedContext from './LeaguedContext';
import './Schedule.css'
import ScheduleButton from './ScheduleButton';
import ScheduleContent from './ScheduleContent';

export default class Schedule extends Component {
    static contextType = LeaguedContext;
    static defaultProps = {
        tabs: []
    };

    state = {
        currentTabIndex: 0
    };

    handleButtonClick = (index) => {
        this.setState({ currentTabIndex: index })
    }

    renderButtons(activeIndex) {
        let {teamname, leagueName, team, teamsInLeague } = this.props
        return (
            this.props.schedule.sort(function(a,b){return a.id-b.id}).map((game, index) => (
                <li className='Accordion__item group' key={index}>
                    <ScheduleButton teamsInLeague={teamsInLeague} team={team} game={game} index={index} teamname={teamname} leagueName={leagueName} click={this.handleButtonClick} />
                    {(activeIndex === index) && <ScheduleContent game={game} />}
                </li>
            ))
        )
    }

    render() {
        const { currentTabIndex } = this.state

        return(
            <div>
                <h2>Schedule</h2>
                <ul className='Accordion'>
                    {this.renderButtons(currentTabIndex)} 
                </ul>
            </div>
        )
    }
}