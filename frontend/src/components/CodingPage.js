import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'

//Text Editor
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import axios from 'axios';
require('codemirror/mode/python/python');
require('codemirror/mode/javascript/javascript');

export class CodingPage extends Component {

    state = {
        startValue: 'Enter solution here.',
        mode: 'python',
    }

    continue = (e) => {
        e.preventDefault();
        console.log('hi')
        axios.get(`ENTER URL HERE`)
            .then(res => {
            const persons = res.data;
            this.setState({ persons });
            })
        //this.props.nextStep();
    }
   
  render() {
    const {startValue} = this.state;
    const {mode} = this.state;

    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title = 'Code Mirror'></AppBar>
                <CodeMirror
                  style = {styles.editor}
                  value= {startValue}
                  options={{
                    mode: {mode},
                    theme: 'material',
                    lineNumbers: true,
                    smartIndent: true,
                    autocorrect: true
                  }}
                  onChange={(editor, data, value) => {
                  }}
                />
                <RaisedButton
                    label = 'Submit Solution'
                    primary = {true}
                    style = {styles.button}
                    onClick = {this.continue}
                ></RaisedButton>
            </React.Fragment>
        </MuiThemeProvider>
    )
  }
}

const styles = {
    editor: {
        border: 1,
        height: 'auto'
    },
    button: {
        margin: 15
    }
}

export default CodingPage
