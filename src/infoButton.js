import './submitButton.css'
import React from "react"
import InfoModal from './infoModal';
/**
 * Represents a question and answer box.
 */
class infoButton extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            "selected": false
        };

    }

    render(){
        let modal;
        if(this.state.selected === true){
            modal = <InfoModal/>
        }else{
            modal = <></>
        }
        return <div className="infoButton">
            <button type= "button" className="btn btn-primary" 
            data-bs-toggle="modal" data-bs-target="#InfoModal" onClick={()=>{
                console.log("Clicked?"); 
                this.setState({
                    "selected": !this.state.selected,
                })
            }}>Help</button>
            {modal}
        </div>
    }


}


export default infoButton;