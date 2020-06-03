import React from 'react'


import {
	getFromStorage,
	setInStorage,
	removeFromStorage,
} from '../../utils/storage'

const UserContext = React.createContext()

export class UserProvider extends React.Component {
	constructor() {
		super()
		this.state = {
			username: '',
			email: '',
			id: '',
			isLoggedIn: false,
			isAdmin: false,
			isLoading: false,
			token: '',

			onSignIn: this.onSignIn,
			onSignOut: this.onSignOut,
			getAllProducts: this.getAllProducts,
			displayAllProducts: this.displayAllProducts,
			setUsername: this.setUsername,
			getUserData: this.getUserData,

			
		}
	}



	componentDidMount(){
	this.getUserData()
	}

	
	getUserData =() => {

		const obj = getFromStorage('storage-object')
		if (obj && obj.token) {
			const { token } = obj
			console.log(token)

			fetch('http://localhost:5000/verify', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'auth-token': token,
			},
		
		}).then((res) => res.json())
				.then((json) => {
					if (json) {
					const {username, _id, isAdmin, email } = json

						this.setState({
							username: username,
							id: _id,
							isAdmin: isAdmin,
							email: email,
							isLoading: false,
							isLoggedIn: true,
							token: token,
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

	setUsername = (username) => {
		this.setState({
			username: username
		})
	}

	
	onSignIn = (username, password) => {
		// const { username, password } = this.state

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

					this.getUserData()
				} else {
					alert(json.message)
				}
			})
			.catch()
	}

	onSignOut = () => {
		this.setState({
			isLoading: true,
		})

		const obj = getFromStorage('storage-object')
		if (obj && obj.token) {
			// const { token } = obj

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


	render() {
		return (
			<UserContext.Provider value={this.state}>
				{this.props.children}
			</UserContext.Provider>
		)
	}
}

export default UserContext
export const Consumer = UserContext.Consumer
