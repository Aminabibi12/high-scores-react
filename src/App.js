import React, {useState} from 'react';
import './App.css';
import HighScoreTable from './HighScoresTable';
import allCountryScores from "./Scores";
import WorlWideTable from './WorldWideTable';

const App = () => {
  const [sort, setSort] = useState("descending")

  const sortTable = allCountryScores.sort((a , b) => a.name < b.name ? -1 : 1)

      const sortScore = sortTable.map(country => ({
       ...country,
       scores: country.scores.sort((a, b) => {
        if(sort === "descending"){
          return b.s - a.s
        }
        else if(sort === "ascending"){
          return a.s - b.s
        }
        return 0;
       })

      }))

      const toggleSort = () => {
        if(sort === "descending"){
         setSort("ascending")
        }
        else {
         setSort("descending")
        }
 
       }

      return (
           <div className='container'>

            <div className='world-table'>
              <h1>World-Wide-Scores-Table</h1>
              <WorlWideTable />
            </div>

            <div className='app'>
              <h1>High Scores Per Country</h1>
              <button onClick={toggleSort}>Change Scores Order</button>
              {sortScore.map((country, index) => (
                 <HighScoreTable key={index} country={country} />
              ))}
            </div>

           </div>
      )
 }
   export default App;