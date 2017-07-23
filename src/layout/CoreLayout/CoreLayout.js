import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CoreLayout = ({ children }) => (
  <div>
    <Link to="/about">About</Link>
    <Link to="/">nono</Link>
    { children }
  </div>
);

CoreLayout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default CoreLayout;
