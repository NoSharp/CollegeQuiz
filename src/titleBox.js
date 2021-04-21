import './titleBox.css'
import React from "react"
import PropTypes from "prop-types"
/**
 * Represents a question and answer box.
 */
class TitleBox extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return <div className="titleBox">
            <h1 className="titleBoxText">{this.props.title}</h1>
            {this.props.children}
        </div>
    }

}

TitleBox.propTypes = {
    title: PropTypes.string
}

export default TitleBox;