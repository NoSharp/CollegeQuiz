import './qaboxContainer.css'

import QABox from './qabox.js'
import React from "react"

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
                    questions.push(jsonData.questionList[question]);
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
        // const gameUUID = this.props.gameUUID;

        return (
            <div className = "TestContainer">
                {questions.map(question => (
                    <QABox question={question}></QABox>
                ))}
            </div>
        )
    }

}

// QABoxContainer.propTypes = {
//     questions: PropTypes.array,
//     gameUUID: PropTypes.string,
//     loaded: PropTypes.bool
// }

export default QABoxContainer;