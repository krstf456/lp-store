import React from 'react'
import UserContext from '../context/userContext'
import './LoginPrompt.css'
import Modal from '../modal/modal'
import { Box, Button } from 'grommet'
// import LoadingAnimation from '../animations/LoadingAnimation'
import ErrorAnimation from '../animations/ErrorAnimation'

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

	successfullyCreatedUser = () => {
		alert('You were successfully registered!')
	}

	//Place modal-content in here
	get modal() {
		if (this.state.showModal) {
			return (
				// <Modal>
				<>
					<Box
						id='loginPrompt'
						style={{
							display: 'flex',
							alignSelf: 'center',
							// left: '33vw',
							// top: '10%',

							position: 'sticky',
							height: '0rem',
						}}
						background='dark-1'
						width='30rem'
						height='30rem'
						align='center'
					>
						<div style={innerStyle}>
							<Button
								style={{ zIndex: '2' }}
								onClick={() => {
									this.toggleModal()
								}}
							>
								Close
							</Button>
							<h2 style={bigTextStyle}>Hey Dude!</h2>

							{/* <LoadingAnimation /> */}
							<ErrorAnimation />

							<h2 style={smallTextStyle}>
								You need to be logged in to place an order!
							</h2>
						</div>
					</Box>
				</>
				//	</Modal>
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

var innerStyle = {
	background: 'rgba(255,255,255,0.4)',
	borderRadius: '100%',
}

var bigTextStyle = {
	zIndex: '2',
	color: 'black',
	fontSize: '3rem',
}

var smallTextStyle = {
	zIndex: '2',
	position: 'relative',
	color: 'black',
}

export default LoginPrompt
