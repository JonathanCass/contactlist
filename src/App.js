import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import data from './data'
import shortid from 'shortid'
import SingleView from './SingleView'

const styles={
  listView: {
    width: 400,
    height: 50,
    background: '#F3F5F6',
    fontSize: 20,
    padding: 14,
    border: '1px solid #D3DEE2' 
  },
  myPeeps: {
    width: 374,
    height: 52,
    color: 'white',
    background: '#81BC39',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 20,
    padding: 14,
    border: '1px solid #649C1A',
    borderWidth: '0 0 3px 0'
  },
  ul:{
    listStyle: 'none',
    padding: 0
  },
  person: {
    width: 50,
    height: 50,
    float: 'left'
  },
  listEntry: {
    width: 374,
    height: 50,
    marginLeft: 20,
    fontSize: 14,
    border: '1px solid #D3DEE2',
    borderWidth: '0 0 1px 0',
  },
  names:{
    height:'100%',
    width:324,
    float: 'left',
    textTransform: 'capitalize',
    padding:18
  }
}
export default React.createClass({
  render(){
    console.log(shortid.generate())
    return(
      <Router>
        <div style={styles.app}>                   
          <div style={styles.listView}> List View </div>     
          <div>
            <ul style={styles.ul}>
              <li style={styles.myPeeps}>My Peeps</li>
                {data.map(function(person){
                  return(
                    <Link to='/SingleView'><li style={styles.listEntry} key={'id' + shortid.generate()}><button style={styles.person}></button><span style={styles.names}>{person.name.first +' '+ person.name.last}</span></li></Link>
                    )
                })}
            </ul>
          </div>
        <Route path='/SingleView' component={SingleView} />
        </div>
      </Router>
    )
  }
})
