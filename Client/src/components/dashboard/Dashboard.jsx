import React from 'react'
import { Box, ResponsiveContext, Button } from 'grommet'
import Admin from '../admin/admin'
import UserContext from '../context/userContext'


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
			<div>
				<input
					type='text'
					placeholder='username'
					onChange={this.onChangeUsernameInput}
				/>
				<input
					type='password'
					placeholder='password'
					onChange={this.onChangePasswordInput}
				/>
				<Button primary label='Login' onClick={() => this.context.onSignIn(username, password)} />
			</div>
		)
	}

	dashboard = () => {
		return (
			<div>
				<h4>user: {this.context.username}</h4>
				<h6>mail: {this.context.email}</h6>
				<h6>isAdmin: {String(this.context.isAdmin)}</h6>
				<h6>id: {this.context.id}</h6>
				<h6>token: {this.context.token}</h6>
				



				<Button primary label="My Orders"/>
				<Button
					primary
					label='Logout'
					onClick={() => this.context.onSignOut()}
				/>
			</div>
		)
	}

	dashboardUser = () => {
		return(
			<h2>USER</h2>
		)
	}

	dashboardAdmin = () => {
		return(
			<h2>ADMIN</h2>
		)
	}
	render() {
		return (
			<ResponsiveContext.Consumer>
				{(size) => (
					<>
					<Box>
						{/* <Form>{this.loginForm()}</Form> */}
						{this.context.isLoggedIn
							? this.dashboard()
							: this.loginForm()}
							
					</Box>
					 <Box>
						{this.context.isLoggedIn && this.context.isAdmin 
						? <Admin />
						: null}
					</Box> 
					</> 
				)}
			</ResponsiveContext.Consumer>
		)
	}
}

export default Dashboard
