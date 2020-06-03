import React, { useContext } from 'react'
import { Box } from 'grommet/components/Box'



export default class CheckoutCart extends React.Component {
    render() {
        return (
            <Grommet theme={theme}>
                <Box pad="large" wrap={true} direction='row-responsive' justify='between'>
                    <List
                        data={cartItems}
                        primaryKey={item => (
                            <Box direction='row-responsive' wrap={true} gap='small' justify='center' align='center'>
                                <Text size="large" weight="bold">
                                </Text>
                                <Box height='xsmall' width='small'>
                                    <Image fit='contain'></Image>
    
                                </Box>
                                <Box direction='row' wrap={true} gap='small' justify='center' align='center'>
                                    <Text size="medium" weight="bold">
                                        Quantity : {item.quantity}
                                    </Text>
                                    <Box direction='row'>
                                        <Button
                                            hoverIndicator
                                            style={{ borderRadius: '50%' }}
                                            size="small"
                                            icon={<AddCircle size='medium' color='dark-1' />}
                                            onClick={() => {  }}
                                        />
                                        <Button
                                            hoverIndicator
                                            size="small"
                                            style={{ borderRadius: '50%' }}
                                            icon={<SubtractCircle size='medium' color='dark-1' />}
                                            onClick={() => {  }}
                                        />
                                    </Box>
                                </Box>
    
                            </Box>
                        )}
                        secondaryKey={item => (
                            <Box>
                                <Paragraph size="large">
                                    {item.price}<Text size="small" color="dark-4"> SEK/piece</Text>
                                </Paragraph>
                            </Box>
                        )}
                    />
                    <Box align='end' gap='small'>
                        <Paragraph size="large">
                            Total = {totalPrice(cartItems).toFixed(2)}<Text size="small" color="dark-4"> SEK</Text>
                        </Paragraph>
                        <Box animation='pulse'>
                            <Link to='/Checkout' >
                                <Button
                                    size="small"
                                    primary
                                    label='to checkout'
                                    icon={<LinkNext />}
                                />
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Grommet>
        )
    }
    }

    

export const totalPrice = (cartItems) => {
    let totalPrice = 0
    for (let item of cartItems) {
        totalPrice += item.quantity * item.price
    }
    return (totalPrice)
}