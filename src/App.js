import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import SingleView from './SingleView'
import ListView from './ListView'

export default React.createClass({
  render(){
    return(
      <Router>
        <div>
          <Route exact={true} path='/' component={ListView} />
        </div>
      </Router>
    )
  }
})
