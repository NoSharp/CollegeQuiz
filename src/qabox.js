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
                <div class="form-check qabox-radios">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label class="form-check-label" for="flexRadioDefault1">
                        False
                    </label>
                </div>
                <div class="form-check qabox-radios">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                    <label class="form-check-label" for="flexRadioDefault2">
                        True
                    </label>
                </div>
            </div>
        </div>
    }

}

QAbox.propTypes = {
    question: PropTypes.string
}

export default QAbox;