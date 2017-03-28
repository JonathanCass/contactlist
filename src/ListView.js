import React from 'react'
import {Link, Route} from 'react-router-dom'
import SingleView from './SingleView'
import data from './contacts'

const styles={
  listMain: {
    width: 472,
    height: '100%',
    border: '1px solid #D3DEE2',
    margin: 20
  },
  listView :{
    background: '#F3F5F6',
    fontSize: 20,
    padding: 14,
    border: '1px solid #D3DEE2',
  },
  myPeeps: {
    width: 450,
    height: 52,
    color: 'white',
    background: '#81BC39',
    fontSize: 20,
    padding: 14,
    border: '1px solid #649C1A',
    borderWidth: '0 0 3px 0',
  },
  ul:{
    listStyle: 'none',
    padding: 0,
    marginLeft: 20
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
    width: 450,
    height: 50,
    fontSize: 14,
    border: '1px solid #D3DEE2',
    borderWidth: '0 0 1px 0',
  },
  names:{
    textTransform: 'capitalize',
    padding:18,
    height:50,
    float: 'left',
    display:'inline-block',
    color: 'black',
    fontSize: 13
  },
  avatar:{
    float: 'left'
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
                {data.map(function(data){
                  return(
                    <Link to={'/person/' + data.id} key={'clist' + data.id}>
                      <li style={styles.listEntry}><img style={styles.avatar} alt={data.name.first + data.name.last} src={data.picture.thumbnail} /><span style={styles.names}>{data.name.first} {data.name.last} </span> </li>
                    </Link>
                    )
                })}
            </ul>
          </div>
        <Route path='/SingleView' component={SingleView} />
        </div>
  	)
  }
})