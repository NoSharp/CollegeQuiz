import React from "react";
import "./answerModal.css"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
class AnswerModal extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
        this.state.column1 = "";
        this.state.column2 = "";
    
    }

    setColumn1(info){
        this.setState({
            column1: info,
            column2: this.state.column2
        })
    }

    setColumn2(info){
        this.setState({
            column1: this.state.column1,
            column2: info
        })
    }

    render(){
        let data = {};
        

        return <Modal show={true} onHide={()=>{}}>
        <Modal.Body>
            <div className="row">
                <h2 className="col-md-4 offset-md-4" style={{ "text-align": "center" }}> Results: </h2>
                <div className="col-md-6 modaldata" style={{ "text-align": "center" }}>
                    
                    {this.props.column1.split(",").map(x=>(
                        <p>{x}</p>
                    ))}
                    
                </div>
                <div className="col-md-6 modaldata">
                    
                    {
                    this.props.column2.split(",").map(x=>(
                        <p>{x}</p>
                    ))}
                    
                </div>
                
                <div className="col-md-8 offset-md-2">
                    <h3 style={{ "text-align": "center" }}> {this.props.correctAmount} / 10 </h3>
                </div>

                <div className="col-md-8 offset-md-2">
                    <ProgressBar striped variant="success" now={this.props.percentage} />
                </div>
                <div className="col-md-4 offset-md-4" style={{"margin-top": "2vh"}}>
                
                    <Button variant="primary" onClick={()=>{
                        window.location.reload();
                    }}>Let's go again!</Button>
                </div>
                
            </div>
            
        </Modal.Body>
      </Modal>
    }
}

export default AnswerModal;