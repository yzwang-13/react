import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import {OrderContextProvider} from "./Store/OrderContext";
import React from "react";

ReactDOM.render(<OrderContextProvider><App /></OrderContextProvider>, document.getElementById('root'));
