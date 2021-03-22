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
            <div className="answerbox">
            <div className="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" className="btn btn-secondary">True</button>
                <button type="button" className="btn btn-secondary">False</button>
            </div>
            </div>
        </div>
    }

}

QAbox.propTypes = {
    question: PropTypes.string
}

export default QAbox;