import React from 'react';

import asyncRequest from "../services/asyncRequest";

class restaurants extends React.Component {
  state = {
    fetching: true,
    restaurants: []
  };

  componentDidMount() {
    asyncRequest({
      url: '/restaurants'
    }).then(data => {
      this.setState({
        fetching: false,
        restaurants: data
      });
    }).catch(e => {
      console.log(e);
    });
  }

  render() {
    return (
      <div>
        YO
      </div>
    )
  }
}

export default restaurants;