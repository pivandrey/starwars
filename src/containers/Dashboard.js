import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.css';

import { fetchPeoples, openPeople } from '../actions/peoplesActions';

class Dashboard extends Component {

  state = {
    search: '',
  }

  componentDidMount = () => {
    this.props.fetchPeoples();
  };

  handleClickOnPeople = (value) => {
    this.props.openPeople(value);
  };

  handleChangeSearch = (e) => {
    const value = e.currentTarget.value
    this.setState ({
      search: value,
    })
  }

  render() {
    const peoples = this.props.peoples;
    return(
      <div className="container">
        <span>Find people</span>
        <input
          type="text"
          onChange={this.handleChangeSearch}
          className="searchBlock"
        />
        {!this.state.search ?
          peoples.map((people) => (
            <button 
              key={'keyButton' + people.name}
              onClick={() => this.handleClickOnPeople(people.url)}
              className="peopleBlock"
            >
              <p key={'key' + people.name}>{people.name}</p>
            </button>
          )) : peoples
            .filter((peopleSearch) => (peopleSearch['name'].toLowerCase().indexOf(this.state.search.toLowerCase()) > -1))
            .map((people) => (
              <button 
                key={'keyButton' + people.name}
                onClick={() => this.handleClickOnPeople(people.url)}
                className="peopleBlock"
              >
                <p key={'key' + people.name}>{people.name}</p>
              </button>
            )
          )
        }
      </div>
    )
  }
}

Dashboard.propTypes = {
  peoples: PropTypes.array.isRequired,
}

const mapStateToProps = store => {
  return {
    peoples: store.peoples.peoples,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchPeoples,
    openPeople
  },
  dispatch
);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps, 
)(Dashboard));