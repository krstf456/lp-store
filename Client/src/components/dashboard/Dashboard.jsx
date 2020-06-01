import React from 'react'
import { Box, ResponsiveContext, Button } from 'grommet'
import UserContext from '../context/userContext'

class Dashboard extends React.Component {
	//This will enable the use of context-functions and states
	static contextType = UserContext

	render() {
		return (
			<ResponsiveContext.Consumer>
				{(size) => (
					<Box>
						<h1>ProductInfo</h1>
						<Button primary label='Login' />
					</Box>
				)}
			</ResponsiveContext.Consumer>
		)
	}
}

export default Dashboard
