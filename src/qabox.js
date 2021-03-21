import PropTypes from "prop-types";
import './qabox.css'
import React from "react"
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

/**
 * Represents a question and answer box.
 */
class QAbox extends React.Component{
     
    render(){
        return <div class="qabox">
            <h1 class="qaboxText">{this.props.question}</h1>
            <div class = "answerbox">
            <div class="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" class="btn btn-secondary">True</button>
                <button type="button" class="btn btn-secondary">False</button>
            </div>
            </div>
        </div>
    }

}

QAbox.propTypes = {
    question: PropTypes.string
}

export default QAbox;