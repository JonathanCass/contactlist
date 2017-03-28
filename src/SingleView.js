import React from 'react'
import contacts from './contacts.json'

const styles={
	backButton:{
		position: 'absolute',
		top: 10,
		left: 10
	},
	imageContainer:{
		background: '#A7D076',
		textAlign: 'center',
		position: 'relative'
	}
}

export default React.createClass({
  getIntitialState() {
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
    	<div>
    		<div style={styles.imageContainer}>
    			<button style={styles.backButton} onClick={this.handleBack} >Back</button>
    			<img src={contact.picture.medium} alt={contact.name.first} />
    		</div>
    		<ul>
				<li>{contact.name.first} {contact.name.last}</li>
    		</ul>
  		</div>
    )
  }
})


