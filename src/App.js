import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import data from './data'

const styles={
  listView: {
    width: 400,
    height: 50,
    background: '#F3F5F6',
    fontSize: 16  
  },
  myPeeps: {
    width: 374,
    height: 52,
    color: 'white',
    background: '#81BC39',
    fontSize: 16,
    marginTop: 10,
    marginLeft: 20,
  },
  person: {
    width: 50,
    height: 50
  },
  ul:{
    listStyle: 'none'
  }
}
export default React.createClass({
  render: function (){
    console.log(data)
    return(
      <Router>
        <div>                   
          <div style={styles.listView}>
            <div>
              <ul style={styles.ul}>
                <li style={styles.myPeeps}>My Peeps</li>
                  {data.map(function(person){
                    return(
                      <li><button style={styles.person}></button>{person.name.first}</li>
                    )
                  })}
              </ul>
            </div>
          </div>
        </div>
      </Router>
    )
  }
})
