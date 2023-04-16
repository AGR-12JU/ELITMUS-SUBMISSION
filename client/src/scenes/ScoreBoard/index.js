import React, {useState, useEffect} from 'react'
import API from "../../utils/API";
import "./style.css"

function ScoreBoard () {

    const [winners, setWinners] = useState([])

    useEffect(() => {
        findUsers()
    }, [])


    function findUsers() {
        API.findAll()
        .then(res => {
            findWinners(res.data)
        })
        .catch(err => console.log(err))
    }

    function findWinners(users) {
        const winnerList = users.filter(user => user.puzzles[0].isSolved)
        const sortedData = winnerList.sort((a,b)=>{
            const at = new Date(a.updatedAt) - new Date(a.createdAt);
            const bt = new Date(b.updatedAt) - new Date(b.createdAt);
            return at-bt;
        })
        const winnerNames = sortedData.map(winner => <li className="list-group-item">{winner.username} -----&gt;  {Math.floor((new Date(winner.updatedAt) - new Date(winner.createdAt))/1000)} seconds</li>)
        setWinners(winnerNames)
    }

    return (
        <div>
        <div className="leader-background">
            <div className="container">
                {/* Plan for future development: this page will show each user in order of the time it took for them to finish the game.*/}
                <div className="winner">
                    WINNERS!
                </div>
                <div className="userName">
                    <ul className="list-group">
                        {winners.length ===0 ? "No one has escaped yet!" : winners}
                    </ul>
                </div>
            </div>
        </div>
        
                
  
                    
  
                
  
                    
                    
                </div>
                

            
        
    )
}

export default ScoreBoard