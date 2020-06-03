import React from 'react'
import './App.css'
import { Grommet } from 'grommet'
import { grommet } from 'grommet/themes'
import MainPage from './components/mainPage/mainPage'
import Header from '../src/components/header/header'
import Checkout from '../src/components/checkout/Checkout'
import ProductPage from '../src/components/productPage/ProductPage'
import Dashboard from './components/dashboard/Dashboard'
import { Provider } from './components/context/context'
import {UserProvider} from './components/context/userContext'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
			<UserProvider value={this.state}>
				<Provider value={this.state}>
					<div className='App'>
						<Grommet theme={grommet}>
							<Dashboard />
							<Header />
							<Switch>
								<Route
									path='/checkout/'
									component={Checkout}
								></Route>
								<Route
									path='/productpage/'
									component={ProductPage}
								></Route>
								<Route path='/' component={MainPage}></Route>
							</Switch>
						</Grommet>
					</div>
				</Provider>
				</UserProvider>
			</BrowserRouter>
		)
	}
}

export default App
