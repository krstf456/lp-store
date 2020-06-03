import React from "react";
import Context from "../context/context";
import { Box, Button, Image, List, Paragraph, Text, ResponsiveContext } from "grommet";
import { AddCircle, SubtractCircle, LinkNext } from 'grommet-icons'
import { Link } from 'react-router-dom'
class Checkout extends React.Component {
    
    //This will enable the use of context-functions and states
    static contextType = Context;

    
    
    
    render() {
      return (
        <ResponsiveContext.Consumer>
          {(size) => (
            
            <Box pad="large" wrap={true} direction='row-responsive' justify='between'>
                <List
                    
                    primaryKey={item => (
                        <Box direction='row-responsive' wrap={true} gap='small' justify='center' align='center'>
                            <Text size="large" weight="bold">
                            </Text>
                            <Box height='xsmall' width='small'>
                                <Image fit='contain'></Image>

                            </Box>
                            <Box direction='row' wrap={true} gap='small' justify='center' align='center'>
                                <Text size="medium" weight="bold">
                                    {/* Quantity : {item.quantity} */}
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
                    </Paragraph>
                    <Box animation='pulse'>
                        <Link to='/payment' >
                            <Button
                                size="small"
                                primary
                                label='to payment'
                                icon={<LinkNext />}
                            />
                        </Link>
                    </Box>
                </Box>
            </Box>
        
          )}
        </ResponsiveContext.Consumer>
      );
    }
  }
  
  export default Checkout;
  