import React from 'react';
import Context from "../context/Context";

class MainPage extends React.Component {
    //This will enable the use of context-functions and states
    static contextType = Context;

    render() {
        return(
           <div>
               <h1>Main</h1>

           </div>
        )
    }
}

export default MainPage;