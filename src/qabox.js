import PropTypes from "prop-types";
import './qabox.css'
import React from "react"

/**
 * Represents a question and answer box.
 */
class QAbox extends React.Component{
     
    render(){
        return <div className="qabox">
            <h1 className="qaboxText">{this.props.question}</h1>
            <div className="btn-group answerbox" role="group" data-toggle="buttons">
                 <label class="btn btn-secondary" for={"true." + this.props.number}>
                    <input class="btn-check" type="radio" name="options" id={"true." + this.props.number} autocomplete="off"/>True
                </label>
                <label class="btn btn-secondary" for={"false." + this.props.number}>
                    <input class="btn-check" type="radio" name="options" id={"false." + this.props.number} autocomplete="off"/>False
                </label>

            </div>
        </div>
    }

}

QAbox.propTypes = {
    question: PropTypes.string,
    number: PropTypes.number
}

export default QAbox;