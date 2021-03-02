import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LeaguedContext from './LeaguedContext';
import './FindLeague.css'

export default class FindLeague extends Component {
    static contextType = LeaguedContext;

    render() {
        let { leagues } = this.context

        return (
            <div>
                <h3>Select League</h3>
                <ul>
                    {leagues.map((league, i) =>
                            <li key={i} value={league.id}>
                                <NavLink className="navlink" to={`/league/${league.id}`} activeClassName="selected">
                                    {league.name}
                                </NavLink>
                            </li>                    
                    )}
                </ul>
                {/* <form>
                    <label for="league"></label>
                    <select id="league" name="league">
                        <option>Pick League</option>
                        {Object.keys(info).map((league, i) =>
                            <option key={i} value={league}>{league}</option>                    
                        )}
                    </select>
                    <br></br>
                    <button type='submit'>Submit</button>
                </form> */}
            </div>   
        )
    }
}