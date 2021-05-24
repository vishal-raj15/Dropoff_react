import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";



export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);

    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeReward = this.onChangeReward.bind(this);
    this.onChangePickup = this.onChangePickup.bind(this);

    this.onChangeDestination = this.onChangeDestination.bind(this);

    this.onChangePhone = this.onChangePhone.bind(this);

    this.state = {
      username: "",
      weight: "",
      phone: "",
      pickup: "",
      destination:"",
      reward:"",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeWeight(e) {
    this.setState({
      weight: e.target.value
    });
  }


  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }

  onChangePickup(e) {
    this.setState({
      pickup: e.target.value
    });
  }

  onChangeDestination(e) {
    this.setState({
      destination: e.target.value
    });
  }

  onChangeReward(e) {
    this.setState({
      reward: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();
    console.log(this.state.username);
    console.log(this.state.weight);
    console.log(this.state.destination);
    console.log(this.state.pickup);
    console.log(this.state.phone);
    console.log(this.state.reward);

    var data = this.state;

    this.props.history.push({
        pathname: '/cmap',
        state: { detail: data }
    });
          window.location.reload();
    
}



  render() {
    return (
      <div className="col-md-12">
        <div className="card card-container">
         <div className="post" style={{ fontSize:'30px' , fontFamily:'roboto' , textAlign:'center' }} > Post </div>

          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username">your name</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="weight">parcel Weight</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="weight"
                    value={this.state.weight}
                    onChange={this.onChangeWeight}
                  />
                </div>

              

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.onChangephone}
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="pickup">Pickup</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="pickup"
                    value={this.state.pickup}
                    onChange={this.onChangePickup}
                  />
                </div>


             

                <div className="form-group">
                  <label htmlFor="destination">destination</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="destination"
                    value={this.state.destination}
                    onChange={this.onChangeDestination}
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="reward">Reward</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="reward"
                    value={this.state.reward}
                    onChange={this.onChangeReward}
                  />
                </div>


                <div className="form-group">
                  <button className="btn btn-primary btn-block">
                      
                      Post Request
                      
                      </button>
                </div>
              </div>
            )}

           
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}
