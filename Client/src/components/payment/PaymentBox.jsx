import React from 'react'
import { Box, Text, RadioButtonGroup, Button } from 'grommet'
import { Money } from 'grommet-icons'
import Swish from './Swish'
import CreditCard from './CreditCard'
import Invoice from './Invoice'
import Context from '../context/context'
import { Consumer as UserConsumer } from '../context/userContext'

//import ClipLoader from "react-spinners/ClipLoader";

class PaymentBox extends React.Component {
	static contextType = Context

	state = {
		paymentSelection: 'swish',
	}

	buttonLoggedIn = () => {
		return (
			<Box alignSelf='center' align='center'>
				{1 && (
					<Button
						type='submit'
						alignSelf='center'
						color='dark-1'
						primary
						label='COMPLETE PURCHASE'
					/>
				)}
				{/* {1 && (
    <>
      <p>Please wait, your order is being placed..</p>
      <ClipLoader size={15} color={"#123abc"} loading={1} />
    </>
  )} */}
			</Box>
		)
	}

	buttonLoggedOut = () => {
		return (
			<>
				<h6>You need to be logged in to place an order</h6>
				<Box alignSelf='center' align='center'>
					{1 && (
						<Button
							type='submit'
							alignSelf='center'
							color='dark-1'
							disabled='true'
							primary
							label='COMPLETE PURCHASE'
							onClick={this.buttonClicked}
						/>
					)}
					{/* {1 && (
    <>
      <p>Please wait, your order is being placed..</p>
      <ClipLoader size={15} color={"#123abc"} loading={1} />
    </>
  )} */}
				</Box>
			</>
		)
	}

	buttonClicked = () => {
		alert('AJJABAJJA')
	}

	render() {
		return (
			<UserConsumer>
				{(userState) => (
					<Box
						pad='large'
						gap='large'
						width='large'
						background='light-1'
					>
						<Box direction='row' justify='between' width='large'>
							<Text size='large' alignSelf='start' weight='bold'>
								Payment
							</Text>
							<Money color='brand'></Money>
						</Box>
						<RadioButtonGroup
							name='paymentOptions'
							value={this.state.paymentSelection}
							onChange={(event) =>
								this.setState({
									paymentSelection: event.target.value,
								})
							}
							options={[
								{
									disabled: false,
									id: 'swish',
									value: 'swish',
									label: 'Swish',
								},
								{
									disabled: false,
									id: 'credit-card',
									value: 'credit-card',
									label: 'Mastercard/VISA',
								},
								{
									disabled: false,
									id: 'invoice',
									value: 'invoice',
									label: 'Klarna Invoice',
								},
							]}
						/>

						{this.state.paymentSelection === 'swish' ? (
							<Swish />
						) : this.state.paymentSelection === 'invoice' ? (
							<Invoice />
						) : (
							<CreditCard />
						)}
						<Box />
						<Text
							alignSelf='center'
							textAlign='center'
							size='large'
						>
							Total{' '}
							<strong>
								{this.context.calculateSum() +
									this.context.selectedShipping.price}{' '}
								:-
							</strong>{' '}
							VAT & shipping included
						</Text>
						<Text
							alignSelf='center'
							textAlign='center'
							size='large'
							style={{ color: 'red' }}
						>
							<strong>{this.props.errorMessage}</strong>
						</Text>

						{userState.isLoggedIn
							? this.buttonLoggedIn()
							: this.buttonLoggedOut()}
					</Box>
				)}
			</UserConsumer>
		)
	}
}

export default PaymentBox
