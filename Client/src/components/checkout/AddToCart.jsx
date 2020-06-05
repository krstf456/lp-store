import React from 'react'
import { Cart } from 'grommet-icons'
import { Button } from "grommet";
import ShoppingCartContext from '../context/shoppingCartContext'





export default class AddtoCartButton extends React.Component {
    static contextType = ShoppingCartContext;
  


    render() {
        return (
            <Button
            className='addToCart'
            margin={{'bottom': 'xsmall'}}
            hoverIndicator
            icon={<Cart />}
            label={'Add To Cart'}
            onClick={this.context.addToCart}
        />
        )
    }
}
 
