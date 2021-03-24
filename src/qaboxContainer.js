import './qaboxContainer.css'

import QABox from './qabox.js'
import React from "react"
import TitleBox from "./titleBox"
import SubmitButton from "./submitButton";
/**
 * Represents a question and answer box container which
 * Get's a list of question from the Spring API.
 * Thanks to: https://reactjs.org/docs/faq-ajax.html
 */
class QABoxContainer extends React.Component{
     
    constructor(props){
        super(props)
        this.state = {
            loaded: false,
            questions: {}
        }
    }

    componentDidMount(){
        fetch("http://localhost:8080/api/v1/GetNewQuestionList",{
            crossDomain: true,
            method: "GET"
        })
            .then(res=>res.json())
            .then((res)=>{
                const jsonData = res;
                let questions = [];
                const gameUUID = jsonData.uuid;
                
                for(let question in jsonData.questionList){
                    console.log(question);
                    questions.push({1: jsonData.questionList[question], 2: question});
                }
                console.log(questions);
                this.setState({
                    questions: questions,
                    gameUUID: gameUUID,
                    loaded: true
                })
            })
            .catch(err=> console.log(` ERROR: ${err}`))
    }

    render(){
        //console.log(this.state);
        if(!this.state.loaded) return <div></div>;
        
        const {gameUUID, loaded, questions} = this.state;

        return (
            <div className = "QAContainer">
                <div class="gameUUID" id={gameUUID}/>
                <TitleBox title="Answer the Questions below" ></TitleBox>
                {questions.map(question => (
                    <QABox question={question[1]} number={question[2]} selected={false}></QABox>
                ))}
                
                <SubmitButton></SubmitButton>
            </div>

        )
    }

}

export default QABoxContainer;