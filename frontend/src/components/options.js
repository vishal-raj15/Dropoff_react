import React, { Component } from 'react'

import { NavLink } from "react-router-dom";


export default class options extends Component {

    constructor(props){
		super(props);
		this.state = {
            flag:1,
		}
	}
    render() {
        return (

                <div>
                <div className='letsee'> View Requests</div>

                <div className='letsee'> Post Request</div>
            </div>
         
            
        )
    }
}
