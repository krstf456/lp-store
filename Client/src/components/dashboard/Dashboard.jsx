import React from 'react'
import { Box, ResponsiveContext, Button, TextInput } from 'grommet'
import UserContext from '../context/userContext'
import "../header/Header.css"


class Dashboard extends React.Component {
	//This will enable the use of context-functions and states
	static contextType = UserContext
	constructor(props) {
		super(props)
		this.state = {
			isLoading: true,
			username: '',
			password: '',

		}

		this.onChangeUsernameInput = this.onChangeUsernameInput.bind(this)
		this.onChangePasswordInput = this.onChangePasswordInput.bind(this)
	}

	componentDidMount() {
	
	}

	onChangeUsernameInput(event) {
		this.setState({
			username: event.target.value,
		})
	}
	onChangePasswordInput(event) {
		this.setState({
			password: event.target.value,
		})
	}

	loginForm = () => {

		const {username, password} = this.state
		return (
			<Box className="login">
				<h1>Sign in</h1>
				<Box className="loginTextInput">
				<TextInput
					type='text'
					placeholder='username'
					onChange={this.onChangeUsernameInput}
				/>
				</Box>
				<Box className="loginTextInput">
				<TextInput
					border="none"
					type='password'
					placeholder='password'
					onChange={this.onChangePasswordInput}
				/>
				</Box>
				<Box className="buttonBox">
				<Button label='Sign in' onClick={() => this.context.onSignIn(username, password)} />
				</Box>
			</Box>
		)
	}


	render() {
		return (
			<ResponsiveContext.Consumer>
				{(size) => (
					<>
					<Box pad="medium">
						<Box>
							{this.context.isLoggedIn
								? <h1>Hey {this.state.username} <br/> you're signed in dude.</h1>
								: this.loginForm()}
						</Box>
						<Box>
							{this.context.isLoggedIn && this.context.isAdmin 
								? <h1>... and yeah, you have admin rights.</h1>
								: null}
						</Box>
					</Box>
					</> 
				)}
			</ResponsiveContext.Consumer>
		)
	}
}

export default Dashboard



