
import React from "react";
import Card from '../../components/Card';
import Row from '../../components/Row';
import Col from '../../components/Col';
import './style.css'

function Welcome (props) {
    
    return(
        <div className="background-login">
            <header className="welcome">
                Welcome to the Curiousity!
                
            </header>
            <div className="container">
                <Row>
                    <Col size="lg-4">
                        
                        <br></br>
                        <br></br>
                        
                    </Col>
                    <Col size="lg-4">
                        <Card>
                            <form>
                                <div className="form-group">
                                    <div className="formTitle">Sign Up</div>
                                    <div className="input-group mb-3">
                                        <input onChange={props.handleInputChange} name="firstName" type="text" className="form-control" placeholder="First Name" aria-label="First Name"/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input onChange={props.handleInputChange} name="lastName" type="text" className="form-control" placeholder="Last Name" aria-label="Last Name"/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input onChange={props.handleInputChange} name="username" type="text" className="form-control" placeholder="Email" aria-label="Username"/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input onChange={props.handleInputChange} name="password" type="password" className="form-control" placeholder="Password" aria-label="Password"/>
                                    </div>
                                    <button type="submit" onClick={props.handleSignUpSubmit} className="btn btn-warning">
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </Card>
                    </Col>
                    <Col size="lg-4">
                        <Card>
                            <form>
                                <div className="form-group">
                                    <div className="formTitle">Log In</div>
                                    <div className="input-group mb-3">
                                        <input onChange={props.handleInputChange} name="username" type="text" className="form-control" placeholder="Email" aria-label="Username"/>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input onChange={props.handleInputChange} name="password" type="password" className="form-control" placeholder="Password" aria-label="Password"/>
                                    </div>
                                    <button
                                        type="submit"
                                        onClick={props.handleLogInSubmit}
                                        className="btn btn-warning"
                                    >
                                        Log In
                                    </button>
                                </div>
                            </form>
                        </Card>
                    </Col>
                </Row>
            </div>
            
                
  
                    
                    
  
                    
                
            </div>
        
    );
}

export default Welcome
