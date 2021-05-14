import React, {useCallback, useState} from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from "./components/Demo/DemoOutput";

import './App.css';

function App() {
    console.log('App Running')

    const [showParagraph, setShowParagraph] = useState(false);
    const [allowToggle, setAllowToggle] = useState(false);


    const paragraphChangeHandler = useCallback(() => {
        if (allowToggle) {
            setShowParagraph(prevState => {
                return !prevState;
            })
        }
    }, [allowToggle]);

    const allowToggleHandler = props => {
        setAllowToggle(true);
    }


  return (
    <div className="app">
      <h1>Hi there!</h1>
        <DemoOutput show={showParagraph}/>
        <Button onClick={allowToggleHandler}>Allow Toggling</Button>
        <Button onClick={paragraphChangeHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
