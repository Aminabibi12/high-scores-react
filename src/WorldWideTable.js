import React from "react";
import allCountryScores from "./Scores";

const WorldWideTable = () => {
    const allScores = allCountryScores.flatMap((country) => country.scores)

    const highScores = allScores.sort((a, b) => b.s - a.s)

    return(
        <div className="world-score-table">
            <h2>All Countries Scores </h2>
            <table>
                <tbody>
                    {highScores.map((score, index) => (
                        <tr key={index}>
                        <td>{score.n}</td>
                        <td>{score.s}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default WorldWideTable;