import React, { useState } from "react";
import "./infoModal.css"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

//https://stackoverflow.com/questions/41819342/how-to-hide-and-show-a-div-in-react
class InfoModal extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
        this.state.column1 = "";
        this.state.column2 = "";
        this.state.displaying = true;
        
    }

    render(){
        let data = {};

        if(!this.state.displaying){
            return <></>
        }
        return <Modal show={true} onHide={()=>{}} style={{display: ( this.state.displaying ? 'block' : 'none' ) }}>       <Modal.Body>
            <div className="row">
                <h2 className="col-md-12" style={{ "text-align": "center" }}> Help! </h2>
                <p>
                    1) Read the question.
                    <br/>
                    2) Answer True or False depending on what you think the answer is.
                    <br/>
                    3) Click submit and get your results!
                </p>
                <div className="col-md-12" style={{"margin-left": "auto", "margin-right": "right"}}>
                
                    <Button variant="primary" onClick={()=>{
                        this.setState({
                            "displaying": false
                        })
                    }}>Close</Button>
                </div>
                
            </div>
        </Modal.Body>
      </Modal>
    }
}

export default InfoModal;