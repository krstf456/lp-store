import React from 'react'
import { Cart } from 'grommet-icons'
import { Button } from "grommet";


export default class AddtoCartButton extends React.Component {
    render() {
        return (
            <Button
            className='addToCart'
            margin={{'bottom': 'xsmall'}}
            hoverIndicator
            icon={<Cart />}
            label={'Add To Cart'}
            //onClick={}
        />
        )
    }
}
 
