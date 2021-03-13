import React, {Component} from 'react';
import './App.css';
import Input from './Input/Input';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
    state = {
        inputLength: null,
        text: null
    }

    inputChangedHandler = (event) => {
        //Hint: Keep in mind that JavaScript strings are basically arrays!
        // console.log(event.target.value.length);
        this.setState({
            inputLength: event.target.value.length,
            text: event.target.value
        })
    }

    deleteCharHandler = (index) => {
        const currentStr = this.state.text.split("");
        currentStr.splice(index, 1)
        console.log(currentStr);
        const newText = currentStr.join("");
        this.setState({
            text: newText
        })

    }

    render() {
        let charList;
        if (this.state.text !== null) {
            charList = this.state.text.split("").map((item, index) => {
                return <Char character={item} key={index} clicked={() => this.deleteCharHandler(index)}/>
            });
        }
        return (
            <div className="App">
                <ol>
                    <li>Create an input field (in App component) with a change listener which outputs the length of the
                        entered text below it (e.g. in a paragraph).
                    </li>
                    <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
                    <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending
                        on the text length (e.g. take 5 as a minimum length)
                    </li>
                    <li>Create another component (=> CharComponent) and style it as an inline box (=> display:
                        inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
                    </li>
                    <li>Render a list of CharComponents where each CharComponent receives a different letter of the
                        entered text (in the initial input field) as a prop.
                    </li>
                    <li>When you click a CharComponent, it should be removed from the entered text.</li>
                </ol>
                <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

                <Input text={this.state.text} changed={this.inputChangedHandler} inputLength={this.state.inputLength}/>
                <Validation length={this.state.inputLength}/>
                {charList}
            </div>
        );
    }
}

export default App;
