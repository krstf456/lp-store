import React from 'react'
import { Box, Main, Heading, Form } from 'grommet'
import {} from 'grommet-icons'
import ShoppingCart from './ShoppingCart'
import Delivery from './Delivery'
import Shipping from './Shipping'
import userContext from '../context/userContext'
import Payment from "../payment/PaymentBox";
import OrderPage from "./OrderPage"
import {getFromStorage} from '../../utils/storage'
import "./Checkout.css";
import LoginPrompt from '../loginPrompt/LoginPrompt'

class Checkout extends React.Component {
	static contextType = userContext

	constructor(props) {
		super(props)
		this.state = {
			errorMessage: '',
			firstName: '',
			lastName: '',
			phone: '',
			streetAddress: '',
			postalCode: '',
			city: '',
			orderIsSent: false,
			checkoutData: [],
			paymentSelection: 'swish',
		}
	}

	handlePayment = (event) => {
		this.setState({
			paymentSelection: event.target.value,
		})
	}

	handleSubmit = async () => {
		const obj = getFromStorage('storage-object')
		if (obj && obj.token) {
			const { token } = obj
			let items = JSON.parse(localStorage.getItem('cart'))
			this.setState({
				checkoutData: items,
			})
			if (!Array.isArray(items) || !items.length) {
				this.setState({
					errorMessage: `Dude, you need to, like, buy something, or stuff.`,
				})
			} else {
				// `POST` order
				let productList = []
				let totalSum = 0
				const products = JSON.parse(localStorage.getItem('cart'))
				for (let i = 0; i < products.length; i++) {
					for (let j = 0; j < products[i].quantity; j++) {
						productList.push(products[i].product)
					}
					delete products[i].quantity
					delete products[i].product._id
					totalSum = totalSum + products[i].product.price
				}
				const data = {
					user_Id: this.context.id,
					products: productList,
					email: this.context.email,
					adress: [
						{
							first_name: this.state.firstName,
							last_name: this.state.lastName,
							street_address: this.state.streetAddress,
							postcode: this.state.postalCode,
							city: this.state.city,
						},
					],
					phone: this.state.phone,
					payment_method: this.state.paymentSelection,
					total_price: totalSum + this.props.selectedShipping.price,
					shipping: [{
						company: this.props.selectedShipping.company,
						price: this.props.selectedShipping.price,
						shipping_time: this.props.selectedShipping.shipping_time
					}]
				}
				fetch(`http://localhost:5000/orders`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'auth-token': token,
					},
					body: JSON.stringify(data),
				})
					.then((response) => response.json())
					.catch((err) => {
						this.setState({
							errorMessage: err,
						})
					})
					.then((response) => {
						if (response.message) {
							this.setState({
								errorMessage: response.message,
							})
						} else {
							this.setState({
								orderIsSent: true,
							})
							localStorage.removeItem('cart')
						}
						this.props.getTotalQuantity()
					})
			}
		} else {
			this.setState({
				errorMessage: 'It would be goovy if you logged in.',
			})
		}
	}

	handleInput = (event) => {
		const { name, value } = event.target
		this.setState({
			[name]: value,
		})
	}

	render() {
		return (
			<>
				{this.context.isLoggedIn ? null : <LoginPrompt />}

				<Main
					direction='column'
					align='center'
					pad='small'
					gap='small'
					flex='grow'
				>
					{!this.state.orderIsSent ? (
						<Box>
							<Heading alignSelf='center' size='small'>
								CHECKOUT
							</Heading>
							<Form
								autoComplete='on'
								validate='submit'
								onSubmit={this.handleSubmit}
							>
								<ShoppingCart />
								<Delivery
									handleInput={this.handleInput}
									firstName={this.state.firstName}
									lastName={this.state.lastName}
									phone={this.state.phone}
									streetAddress={this.state.streetAddress}
									postalCode={this.state.postalCode}
									city={this.state.city}
								/>
								<Shipping />
								<Payment
									errorMessage={this.state.errorMessage}
									handlePayment={this.handlePayment}
									paymentSelection={
										this.state.paymentSelection
									}
								/>
							</Form>
						</Box>
					) : (
						<OrderPage
							firstName={this.state.firstName}
							lastName={this.state.lastName}
							phone={this.state.phone}
							email={this.context.email}
							user={this.context.username}
							streetAddress={this.state.streetAddress}
							postalCode={this.state.postalCode}
							city={this.state.city}
							checkoutData={this.state.checkoutData}
						/>
					)}
				</Main>
			</>
		)
	}
}

export default Checkout
