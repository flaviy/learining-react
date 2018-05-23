import React, {Component} from "react";
import Validator from "./Validator";
import Char from "./Char";

class Assignment2 extends Component {
    state = {
        length : 0,
        enteredTextArray : []
    }

    onChangeHandler = (event) => {
        this.setState({
            length : event.target.value.length,
            enteredTextArray : event.target.value.split('')
        });
    }

    deleteCharHandler = (charIndex) =>  {
        console.log(charIndex)
        const chars = [...this.state.enteredTextArray];
        chars.splice(charIndex,1);
        this.setState({enteredTextArray : chars});
    }

    render() {
        let chars = this.state.enteredTextArray.map((char, index) =>
            <Char
                click={() => this.deleteCharHandler(index)}
                key={'char-' + index}
                char={char}
            />
        )


        return (
            <div>
                <input type="text"  onChange={this.onChangeHandler} placeholder='input text here'/>
                <p>Length: {this.state.length}</p>
                <Validator length={this.state.length} />
                <p>
                    {chars}
                </p>
            </div>
        )
    }
}

export default Assignment2;