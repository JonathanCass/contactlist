import React from 'react'
import {Link, Route} from 'react-router-dom'
import shortid from 'shortid'
import SingleView from './SingleView'
import data from './data'

const styles={
  listMain: {
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
    float: 'left',
    cursor: 'pointer',
    border: '1px solid grey',
    borderRadius: 25
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
  	return (
  		<div style={styles.listMain}>                   
          <div style={styles.listView}> List View </div>     
          <div>
            <ul style={styles.ul}>
              <li style={styles.myPeeps}>My Peeps</li>
                {data.map(function(person){
                  return(
                    <Link key={person.id} to='/SingleView/'><li style={styles.listEntry} key={'id' + shortid.generate()}><div value={person.id} style={styles.person}></div><span value={person.id} style={styles.names}>{person.name.first +' '+ person.name.last}</span></li></Link>
                    )
                }.bind(this))}
            </ul>
          </div>
        <Route path='/SingleView' component={SingleView} />
        </div>
  	)
  }
})