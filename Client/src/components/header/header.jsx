import React from "react";
import Context from "../context/context";

class Header extends React.Component {
    //This will enable the use of context-functions and states
    static contextType = Context;

    render() {
        return(
            <h1>header</h1>
        )
    }
}

export default Header;
