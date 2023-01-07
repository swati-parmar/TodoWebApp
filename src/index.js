import React from 'react';
import ReactDOM  from 'react-dom';
import App from './App';


ReactDOM.render (<App/>,
    document.getElementById('root')
);

// spread operator
// 1 st way
// const fullname = ['swati', 'parmar'];
// const biodata = [1,...fullname, 26, 'male'];

// console.log(fullname);
// console.log(biodata);

// 2nd Way
// var shooterGames = ['call of Duty', 'Far Cry', 'Resident Evil','call of Duty', 'Far Cry', 'Resident Evil' ];
// var racingGames = ['Need for Speed', 'Gran Turismo', 'Burnout'];

// var games = [...shooterGames, ...racingGames];

// console.log(games);

// 3rd way

// var shooterGames = ['call of Duty', 'Far Cry', 'Resident Evil'];
// var [first, ...remaining] = shooterGames;
// console.log(first);
// console.log(remaining);


