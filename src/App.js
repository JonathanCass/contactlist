import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import data from './data'
import shortid from 'shortid'
import SingleView from './SingleView'
import ListView from './ListView'

export default React.createClass({
  getInitialState: function (){
    return {
      id: 1
    }
  },
  render(){
    return(
      <Router>
        <ListView/ >
      </Router>
    )
  }
})
