import React from 'react';
import PropTypes from 'prop-types';
import './ReferData.scss';
import {Link} from 'react-router-dom';

function ReferData({ id, desc, title }){
  return (
    <li>
      <Link
        to={{
          pathname : '/reference-datail',
          state: {id, title, desc},
        }}>
        <span class="alpha">{id}</span>
        <span class="attr">{title}</span>
        <span class="desc">{desc.slice(0,100)}</span>
      </Link>
    </li>
  )
}

ReferData.propTypes = {
  id: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
} 

export default ReferData;