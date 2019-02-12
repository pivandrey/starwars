import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { openPeople } from '../actions/peoplesActions';

class People extends Component {

  componentDidMount = () => {
    const historyOption = this.props.history.location.pathname;
    this.props.openPeople(historyOption);
  }

  render() {
    const people = this.props.people;
    return(
      <div>
        <p>Name: {people.name}</p>
        <p>Gender: {people.gender}</p>
      </div>
    )
  }
}

People.propTypes = {
  people: PropTypes.any.isRequired,
}

const mapStateToProps = store => {
  return {
    people: store.peoples.currentPeople,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    openPeople,
  },
  dispatch
);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps, 
)(People));