import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SingleView from './SingleView'
import ListView from './ListView'

export default React.createClass({
  render(){
    return(
      <Router>
        <div>
          <Route exact={true} path='/' component={ListView} />
          <Route path='/SingleView/:personId' component={SingleView} />
        </div>
      </Router>
    )
  }
})
