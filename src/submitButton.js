import './submitButton.css'
import React from "react"
import AnswerModal from "./answerModal";
/**
 * Represents a question and answer box.
 */
class submitButton extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            "answers":{},
            "selected": false
        };

    }

    render(){
        let modal;
        if(this.state.selected === true){
            modal = <AnswerModal column1={this.state.answers1} column2={this.state.answers2} percentage={this.state.percentage} correctAmount={this.state.correctAmount}></AnswerModal>
        }else{
            modal = <></>
        }

        return <div className="submitButton">
            <button type= "button" className="btn btn-success" onClick={
                ()=>{
                    if(this.state.selected) return;
                    const answers = this.getUserAnswersFromContainer();
                    const gameUUID = this.getGameUUID();
                    let correctAnswers = {};
                    fetch(`http://localhost:8080/api/v1/GetAnswer/${gameUUID}`,{
                        crossDomain: true,
                        method: "GET"
                    })
                        .then(res=>res.json())
                        .then((res)=>{
                            const answerList = res.answerList;
                            
                            const answers = this.getDisplayedTextFromAnswers(answerList);
                            let succ = answers[2];
                            console.log(succ);
                            console.log(Math.round((succ/10)*100, 0));
                            this.setState({
                                "answers1": answers[0],
                                "answers2": answers[1],
                                "selected": true,
                                "percentage":(succ/10)*100,
                                "correctAmount": succ
                            })
                        })
                        .catch(err=> console.log(` ERROR: ${err}`))
                }
            } data-bs-toggle="modal" data-bs-target="#answerBoxModal">Submit</button>
            {modal}
        </div>
    }

    getDisplayedTextFromAnswers(answers){
        const answerList = this.getUserAnswersFromContainer();
        let column1 = "";
        let column2 = "";
        let correct = 0;
        for(let i = 0; i < 5; i++){
            const isCorrect = answers[i] == answerList[i][0];
            if(isCorrect) correct++;
            column1 += `Question ${i+1}: ${isCorrect ? "✅" : "❌"},`;
        }
        for(let i = 5; i < 10; i++){
            const isCorrect = answers[i] == answerList[i][0];
            if(isCorrect) correct++;
            column2 += `Question ${i+1}: ${isCorrect ? "✅" : "❌"},`;
        }
        return [column1, column2, correct]
    }

    getUserAnswersFromContainer(){
        const selectedElements = this.getAllSelectedElements();
        const questions = this.getAllQuestions();
        let answers = {};
        for(const element in selectedElements){
            if(isNaN(element)) continue;
            const parsedAnswerAndId = this.parseAnswerFromIdOfInput(selectedElements[element].id);
            answers[parsedAnswerAndId.id] = [parsedAnswerAndId.answer,questions[parsedAnswerAndId.id].innerText]
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

    getAllQuestions(){
        return document.querySelectorAll(".qaboxText");
    }

    getRadioFromElement(element){
        return element.childNodes;
    }

    getGameUUID(){
        return document.getElementsByClassName("gameUUID")[0].id;
    }

}


export default submitButton;