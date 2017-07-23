import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const CoreLayout = ({ children }) => (
  <div>
    <div>
      <Link to="/">Home</Link>  
      <Link to="/about">About</Link>
    </div>
    { children }
  </div>
);

CoreLayout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default CoreLayout;
