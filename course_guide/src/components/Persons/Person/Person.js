import React, {Component} from 'react';
// import './Person.css';
// import Radium from "radium";
// import styled from 'styled-components';
import Classes from './Person.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...')
        return (
            <div className={Classes.Person}>
                <p onClick={this.props.clicked}> My name is {this.props.name} and I am {this.props.age} old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
    }
}

export default Person;
