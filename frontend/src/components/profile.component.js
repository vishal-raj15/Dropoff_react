import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";
import Cmap from './cmap';
import Options from './options';

import ReactDOM from 'react-dom';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { firstusername: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div className="container">
        {(this.state.userReady) ?
        <div>
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.firstusername}</strong> Profile
          </h3>
        </header>

       
        <p>
          <strong>Id:</strong>{" "}
          {currentUser.id}
        </p>


        <p>
          <strong>Email:</strong>{" "}
          {currentUser.email}
        </p>
        <Options />

        <div style={{ paddingTop:'20px'}}></div>
       
      </div>: <></>}
      </div>
    );
  }
}
