import React from 'react';

const LeaguedContext = React.createContext({
    leagues: [],
    teams: [],
    games: [],
    players: [],
    changeGameData:() => {}
})

export default LeaguedContext