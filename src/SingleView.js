import React from 'react'
import contacts from './contacts.json'

const styles={
	main:{
    margin: 20
  },
	imageContainer:{
		background: '#A7D076',
    width: 375,
    height: 195
	},
  ul:{
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
    listEntry:{
    height: 50,
    width: 375,
    fontSize: 13,
    border: '1px solid #D3DEE2',
    borderWidth: '0 0 1px 0',
    lineHeight: '50px',
    textIndent: 10,
  },
  cap:{
    textTransform: 'capitalize'
  },
  image:{
    height: 120,
    width: 120,
    marginTop: 37,
    marginLeft: 110,
    borderRadius: 100
  }
}

export default React.createClass({
  
  getInitialState() {
  	return {
  		contact: contacts.filter(person=>{
  			return Number(person.id) === Number(this.props.match.params.personId)
  		})[0]
  	}
  },
  handleBack(e) {
  	e.preventDefault()
  	this.props.history.goBack()
  },
  render() {
  	var contact = this.state.contact
    return (
    	<div style={styles.main}>
    		<div style={styles.imageContainer}>
    			<button className="backButton" styles={styles.backButton} onClick={this.handleBack} ></button>
    			<img style={styles.image} src={this.state.contact.picture.medium} alt={this.state.contact.name.first} />
    		</div>
    		<ul style={styles.ul}>
				  <li style={styles.listEntry}><span style={styles.cap}> {contact.name.first} {contact.name.last}</span></li>
    		  <li style={styles.listEntry}>{contact.email}</li>
          <li style={styles.listEntry}>{contact.cell}</li>
          <li style={styles.listEntry}><span style={styles.cap}> {contact.location.city +', '+ contact.location.state}</span></li>
        </ul>
  		</div>
    )
  }
})


