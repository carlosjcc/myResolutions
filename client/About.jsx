import React, { Component } from 'react';

export default class About extends Component {

  setVar() {
      Session.set('Meteor.loginButtons.dropdownVisible', true);
    }

  render() {    
    return (
      <div>
        <h1>About Us</h1>
        <p>asdfasdf sd fas asdf asdf asdf asdf sdfsdf asdf asdf asdf asdf asdf asdf </p>
        <button onClick={this.setVar}>Sign Up</button>
      </div>
    )
  }
}