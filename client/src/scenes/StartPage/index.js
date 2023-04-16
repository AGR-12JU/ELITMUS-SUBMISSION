import React from "react";
import { Link } from "react-router-dom";
import Row from "../../components/Row"
import Col from "../../components/Col"
import "./style.css"

function StartPage (props) {

  let count = 0

  if(props.puzzle && props.puzzle.length) {
    for (var i = 0; i < props.puzzle.length; i++) {
      if (props.puzzle[i].isSolved) {
        count += 1
      }
    }
  }

  const progress = Math.floor((count/3)*100) +"%"

  return (
    <div className="background-startpage">
      <header className="greeting">
        Welcome, {props.user ? props.user.username : "not logged in"}!
      </header>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progress}`}}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {progress} Completed
        </div>
      </div>
      <Row>
        <Col size="md-8">
            <div className="info-card">
              <div className="card-body">
                <h5 className="card-title">Welcome</h5>
                <p className="card-text">
                  Curiosity is a mind game like treasure hunt
                </p>
                <br></br>
                <p className="card-text">
                  Try your best to win

                </p>
                <br></br>
                <p className="card-text">
                  
                </p>
                <br></br>
                <p className="card-text">
                  Solve! Before it's too late!
                </p>
                <div className="startBtn">
                    <Link
                        to="/office"
                        style={{ textDecoration: 'none' }}
                    >
                      <div className="start">
                      {progress > 0+"%" ? "RESUME" : "START GAME"}
                      </div>
                    </Link>
                </div>
              </div>
            </div>
        </Col>
      </Row>
      {/* <div className="night-background">
                <div className="forest-start">
                    <div className="moon"></div>
                </div> */}
{/* <!-- forest end --> */}
                {/* <div className="forest-background-start"></div>
                <div className="road"></div>
            </div>  */}
    </div>
  );
}

export default StartPage;
