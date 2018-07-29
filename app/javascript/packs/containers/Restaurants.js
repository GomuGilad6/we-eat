import React from 'react';
import styled from 'styled-components';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import RestaurantList from "../components/RestaurantList";

import asyncRequest from "../services/asyncRequest";

const Content = styled("div")`

`;

const ListWrapper = styled("div")`
  width: 30%;
  height: calc(100vh - 400px);
  overflow-y: scroll;
`;

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

  _createNotification = ({ type, title = "", message = "", timeout = 3000 }) => {
    switch (type) {
      case "info":
        NotificationManager.info(message);
        break;
      case "success":
        NotificationManager.success(message, title, timeout);
        break;
      case "warning":
        NotificationManager.warning(message, title, timeout);
        break;
      case "error":
        NotificationManager.error(message, title, timeout);
    }
  };

  _addReview = (review) => {
    asyncRequest({
      method: "post",
      url: "/reviews",
      data: {
        review
      }
    }).then(data => {
      this._createNotification({
        type: "success",
        title: "Review Added",
        message: "Thank you!"
      });
      this.setState(({ restaurants }) => (
        {
          restaurants: restaurants.map(restaurant => {
            if (restaurant.id === data.restaurant_id) {
              const reviews = restaurant.reviews;
              return {
                ...restaurant,
                reviews: [
                  ...reviews,
                  data
                ]
              };
            }
            return restaurant;
          })
        }
      ));
    }).catch(e => {
      this._createNotification({
        type: "error",
        title: "Review Not Added",
        message: "Something went wrong :("
      });
      console.log(e);
    });
  };

  _renderRestaurants = () => (
    <ListWrapper>
      <RestaurantList
        restaurants={this.state.restaurants}
        addReview={this._addReview}
      />
    </ListWrapper>
  );

  _renderContent = () => {
    if (this.state.fetching) {
      return (
        <div>
          Loading...
        </div>
      );
    }
    return (
      <Content>
        {this._renderRestaurants()}
      </Content>
    );
  };

  render() {
    return (
      <div>
        {this._renderContent()}
        <NotificationContainer />
      </div>
    );
  }
}

export default restaurants;