import React from 'react'
import { Box, ResponsiveContext, Button, Form } from 'grommet'
import UserContext from '../context/userContext'
import {
	getFromStorage,
	setInStorage,
	removeFromStorage,
} from '../../utils/storage'

class Dashboard extends React.Component {
	//This will enable the use of context-functions and states
	static contextType = UserContext
	constructor(props) {
		super(props)
		this.state = {
			isLoading: true,
			isLoggedIn: false,
			username: '',
			password: '',
		}

		this.onChangeUsernameInput = this.onChangeUsernameInput.bind(this)
		this.onChangePasswordInput = this.onChangePasswordInput.bind(this)
		this.onSignIn = this.onSignIn.bind(this)
	}

	componentDidMount() {
		const obj = getFromStorage('storage-object')
		if (obj && obj.token) {
			const { token } = obj
			fetch('/api/account/verify?token=' + token)
				.then((res) => res.json())
				.then((json) => {
					if (json.success) {
						this.setState({
							token: token,
							isLoading: false,
						})
					} else {
						this.setState({
							isLoading: false,
						})
					}
				})
		} else {
			this.setState({
				isLoading: false,
			})
		}
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

	onSignIn() {
		const { username, password } = this.state

		this.setState({
			isLoading: true,
		})

		fetch('http://localhost:5000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		})
			.then((res) => res.json())
			.then((json) => {
				console.log(json)

				if (json.token) {
					setInStorage('storage-object', { token: json.token })

					this.setState({
						signInError: json.message,
						isLoading: false,
						isLoggedIn: true,
					})
				} else {
					alert(json.message)
				}
			})
			.catch()
	}

	onSignOut() {
		this.setState({
			isLoading: true,
		})

		const obj = getFromStorage('storage-object')
		if (obj && obj.token) {
			const { token } = obj

			removeFromStorage('storage-object', {
				token: obj.token,
			})
			this.setState({
				isLoading: false,
				isLoggedIn: false,
			})
		} else {
			this.setState({
				isLoading: false,
			})
		}
	}

	loginForm = () => {
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
				<Button primary label='Login' onClick={() => this.onSignIn()} />
			</div>
		)
	}

	dashboard = () => {
		return (
			<div>
				<h2>My Orders</h2>
				<Button
					primary
					label='Logout'
					onClick={() => this.onSignOut()}
				/>
			</div>
		)
	}
	render() {
		return (
			<ResponsiveContext.Consumer>
				{(size) => (
					<Box>
						<h1>ProductInfo</h1>
						<h2>{this.context.test}</h2>
						{/* <Form>{this.loginForm()}</Form> */}
						{this.state.isLoggedIn
							? this.dashboard()
							: this.loginForm()}
					</Box>
				)}
			</ResponsiveContext.Consumer>
		)
	}
}

export default Dashboard
