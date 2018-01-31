import React from 'react';
import { render } from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';

Resolutions = new Mongo.Collection("resolutions");

export default class ResolutionsWrapper extends TrackerReact(React.Component) {

  constructor() {
    super();
    this.state = {
      subscription: {
        resolutions: Meteor.subscribe("userResolutions")
      }
    }
  }

  componentWillUnmount() {
    this.state.subscription.resolutions.stop();
  }

  resolutions() {
    // find returns a cursos - fetch returns the object
    return Resolutions.find().fetch();
  }

  render() {
    /*let res = this.resolutions();

    if (res.length < 1) {
      return (<div>Loading</div>)
    }*/
    //console.log(this.resolutions());
    return (
      <div>
        <h1> My Resolutions - {Session.get('test')} </h1>

        <ResolutionsForm/>
        <ul className="resolutions">
          {this.resolutions().map( (resolution) => {
            return <ResolutionSingle key={resolution._id} resolution={resolution} />
          })}

        </ul>
      </div>
    )
  }
}