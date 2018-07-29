import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';

import RestaurantItem from "../RestaurantItem"

class RestaurantList extends React.Component {
  _renderListItems = () => this.props.restaurants.map(restaurant => {
    return (
      <RestaurantItem
        key={restaurant.name}
        {...restaurant}
        addReview={this.props.addReview}
      />
    );
  });

  _renderRestaurantList = () => (
    <List>
      {this._renderListItems()}
    </List>
  );

  render() {
    return this._renderRestaurantList();
  }
};

RestaurantList.propTypes = {
  restaurants: PropTypes.array,
  toggleReviewModal: PropTypes.func,
  addReview: PropTypes.func
};

RestaurantList.defaultProps = {
  restaurants: [],
  toggleReviewModal: () => {},
  addReview: PropTypes.func
};

export default RestaurantList;