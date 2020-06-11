import React from 'react'
import UserContext from '../context/userContext'
import './LoginPrompt.css'
import Modal from '../modal/modal'
import { Box, Button } from 'grommet'
import LoadingAnimation from './LoadingAnimation'
import ErrorAnimation from './ErrorAnimation'

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
		alert('Wow, man. You one of us now!')
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
							position: 'absolute',
							left: '33vw',
							top: '10%',
							position: 'sticky',
							height: '0rem',
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

						<LoadingAnimation />
						<ErrorAnimation />

						<h2
							style={{
								zIndex: '2',
								position: 'relative',
							}}
						>
							Dude. You need to be logged in to place an order!
						</h2>
						<div id='bm'></div>
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

export default LoginPrompt
