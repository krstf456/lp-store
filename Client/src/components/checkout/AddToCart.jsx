import React from 'react'
import { Cart } from 'grommet-icons'
import { Button } from "grommet";
import Context from "../context/context";


export default class AddtoCartButton extends React.Component {
    static contextType = Context;
  


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
 
