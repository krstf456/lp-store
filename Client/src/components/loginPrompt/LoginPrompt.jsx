import React from 'react'
import UserContext from '../context/userContext'
import './LoginPrompt.css'
import Modal from '../modal/modal'
import { Box, Button } from 'grommet'
import ErrorAnimation from '../animations/ErrorAnimation'
import { Close } from 'grommet-icons'

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
							// position: 'absolute',
							position: 'sticky',
							alignSelf: 'center',
							height: '0rem',
						}}
						background='dark-1'
						width='30rem'
						height='30rem'
						align='center'
					>
						<div style={innerStyle}>
							<Button
								id='closeBtn'
								onClick={() => {
									this.toggleModal()
								}}
							>
								<Close color='black' />
							</Button>
							<h2 id='bigText'>Bummer Dude!</h2>

							{/* <LoadingAnimation /> */}
							<ErrorAnimation />

							<h2 style={smallTextStyle}>
								You need to be logged in to order!
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
	marginTop: '1rem',
	// background: 'rgba(255,255,255,0.9)',
	borderRadius: '10%',

	boxShadow: '10px 20px 30px rgba(0,0,0,0.7)',
}

var smallTextStyle = {
	zIndex: '2',
	position: 'relative',
	color: 'black',
	background: 'rgba(234, 182, 145, 0.9)',
	padding: '1rem',
	margin: '1rem 0 0 0',
	borderRadius: '0 0 15% 15%',
}

export default LoginPrompt
