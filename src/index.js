import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './reportWebVitals'
import React, { Fragment } from 'react'
import Button from './App'

ReactDOM.render((
  <Fragment>

    <h2><span>1. Text and onClick function:</span></h2>
    <Button onClick={() => { console.log('SQA Days!') }}>Button text</Button>

    <h2><span>2. Disabled button:</span></h2>
    <Button onClick={() => { console.log('SQA Days!') }} disabled />

    <h2><span>3. Active button:</span></h2>
    <Button active />

  </Fragment>
), document.getElementById('root'));
registerServiceWorker()