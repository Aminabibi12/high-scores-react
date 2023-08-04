import React from "react";
import PlayerScore from './Playscore';

const HighScoresTable = ({country}) => {
    const {name, scores} = country

    return (
        <div className="high-score-table">
            <h2>High Scores: {name}</h2>
            <table>
                <tbody>
                    {scores.map((scoreObj, index) => (
                     <PlayerScore key ={index} name={scoreObj.n} score={scoreObj.s} />
                      ))}
                </tbody>
            </table>
        </div>
    )
} 
  export default HighScoresTable;