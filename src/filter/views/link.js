import React from 'react';
import {connect} from 'react-redux';
import {setFilter} from '../action';

const Link = ({children, onClickFilter, active}) => {
    if (active) {
        return <b className="filter selected">{children}</b>;
      } else {
        return (
          <a href="#" className="filter not-selected" onClick={(ev) => {
            ev.preventDefault();
            onClickFilter();
          }}>
            {children}
          </a>
        );
      }
}

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.filter === ownProps.filter
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClickFilter: () => {
            dispatch(setFilter(ownProps.filter))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Link)