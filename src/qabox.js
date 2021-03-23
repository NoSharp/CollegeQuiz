import './qabox.css'
import React from "react"

/**
 * Represents a question and answer box.
 */
class QAbox extends React.Component{

    constructor(props){
        super(props);
        this.state = {}
        this.setState({
            question: props.question,
            number: props.number,
            selected: true
        })
        this.setSelectedAnswer(false);
    }

    render(){
        const radioClass = "btn btn-primary answerbox-answer" 
        return <div className="qabox">
            <h1 className="qaboxText">{this.props.question}</h1>
            <div className="btn-group answerbox" data-toggle="buttons">
                 <label className={ this.isAnswerSelected(true) ? "selected-answer " + radioClass : radioClass} htmlFor={"true." + this.props.number}>
                    <input className="btn-check" type="radio" name={"true." + this.props.number} id={"true." + this.props.number} autoComplete="off" onClick={
                        ()=>{
                           this.setSelectedAnswer(true);
                        }
                    }/>True
                </label>
                <label className={ this.isAnswerSelected(false) ? "selected-answer " + radioClass : radioClass} htmlFor={"false." + this.props.number}>
                    <input className="btn-check" type="radio" name={"false." + this.props.number} id={"false." + this.props.number} autoComplete="off" onClick={
                        ()=>{
                           this.setSelectedAnswer(false);
                        }
                    }/>False
                </label>
            </div> 
        </div>
    }

    setSelectedAnswer(answer){
        this.setState({
            question: this.props.question,
            number: this.props.number,
            selected: answer
        });
    }

    isAnswerSelected(answer){
        return this.state.selected !== undefined && this.state.selected === answer;
    }
}


export default QAbox;