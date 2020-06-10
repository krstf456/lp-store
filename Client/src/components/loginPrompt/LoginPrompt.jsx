import React from 'react'
import UserContext from '../context/userContext'
import './LoginPrompt.css'
import Modal from '../modal/modal'
import {
	Box,
	Header,
	Button,
	ResponsiveContext,
	Form,
	DropButton,
	Text,
	FormField,
	TextInput,
} from 'grommet'

class LoginPrompt extends React.Component {
	//This will enable the use of context-functions and states
	static contextType = UserContext

	state = {
		showModal: true,
	}

	//To open modal call this function on a button
	toggleModal = () => {
		this.setState({
			showModal: !this.state.showModal,
		})
	}

	h

	successfullyCreatedUser = () => {
		alert('You were successfully registered!')
	}

	//Place modal-content in here
	get modal() {
		if (this.state.showModal) {
			return (
				<Modal>
					<Box
						id='loginPrompt'
						style={{
							display: 'flex',
							position: 'absolute',
							left: '33vw',
							top: '25%',
						}}
						background='dark-1'
						width='30rem'
						height='30rem'
						align='center'
					>
						<Button
							style={{ zIndex: '2' }}
							onClick={() => {
								this.toggleModal()
							}}
						>
							Close
						</Button>
						<h2 style={{ zIndex: '2' }}>Hey Dude!</h2>

						<img
							style={promptStyle}
							src='https://ih0.redbubble.net/image.675056609.9466/flat,1000x1000,075,f.jpg'
						></img>
						<h2
							style={{
								zIndex: '2',
								position: 'relative',
								top: '20rem',
								color: 'red',
							}}
						>
							You need to be logged in to place an order!
						</h2>
					</Box>
				</Modal>
			)
		}
		return undefined
	}

	render() {
		return <>{this.modal}</>
	}
}

var promptStyle = {
	width: '100%',
	position: 'absolute',
	zIndex: '1',
}

export default LoginPrompt
