import './submitButton.css'
import React from "react"
import PropTypes from "prop-types"
/**
 * Represents a question and answer box.
 */
class submitButton extends React.Component{

    render(){
        return <div className="submitButton">
            <button type= "button" className="btn btn-success" onClick={
                ()=>{
                    const answers = this.getAnswersFromContainer();
                    const gameUUID = this.getGameUUID();
                    let correctAnswers = {};
                    fetch(`http://localhost:8080/api/v1/GetAnswer/${gameUUID}`,{
                        crossDomain: true,
                        method: "GET"
                    })
                        .then(res=>res.json())
                        .then((res)=>{
                            const answerList = res.answerList;
                            for(const answerKey in answerList){
                                correctAnswers[answerKey] = answers[answerKey] == answerList[answerKey];
                            }
                            console.log(correctAnswers);
                        })
                        .catch(err=> console.log(` ERROR: ${err}`))
                }
            }>Submit</button>
        </div>
    }

    getAnswersFromContainer(){
        const selectedElements = this.getAllSelectedElements();
        let answers = {};
        for(const element in selectedElements){
            if(isNaN(element)) continue;
            const parsedAnswerAndId = this.parseAnswerFromIdOfInput(selectedElements[element].id);
            answers[parsedAnswerAndId.id] = parsedAnswerAndId.answer;
        }

        return answers;
    }

    /**
     * 
     * @param {string} id 
     * @returns {number,boolean}
     */
    parseAnswerFromIdOfInput(id){
        const splitId = id.split(".");
        return {
            "answer": splitId[0] === "false" ? false : true,
            "id": splitId[1]
        }
    }

    getAllSelectedElements(){
        return document.querySelectorAll(".selected-answer>input");
    }

    getRadioFromElement(element){
        return element.childNodes;
    }

    getGameUUID(){
        return document.getElementsByClassName("gameUUID")[0].id;
    }

}


export default submitButton;