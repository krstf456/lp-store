import React from "react";
import Context from "../context/Context";

class Header extends React.Component {
    //This will enable the use of context-functions and states
    static contextType = Context;

    render() {
        return(
            <div>header</div>
        )
    }
}

export default Header;
