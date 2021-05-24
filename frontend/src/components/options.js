import React, { Component } from 'react'

import ReactDOM from 'react-dom';
import { useHistory ,BrowserRouter ,withRouter} from "react-router-dom";
import Viewrequest from './viewrequest';
import Postrequest from './postrequest';


class Options extends Component{
        render(){
        return (

                <div>
                <div className='letsee' onClick= {() => this.props.history.push("/view")}> 
                
                        <div className='sty'> View Requests</div></div>

                <div className='letsee' onClick= {() => this.props.history.push("/post")}> 
                
                <div className='sty'> Post Requests</div></div> 
           
           
            </div>

         
            
        )}
      
}

export default withRouter(Options);
