import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import shortid from 'shortid'
import SingleView from './SingleView'
import ListView from './ListView'

export default React.createClass({
  render(){
    return(
      <Router>
        <div>
          <Link to="/ListView">ListView</Link>
        
          <Route path='/ListView' component={ListView} />
        </div>
      </Router>
    )
  }
})
