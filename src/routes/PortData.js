import React from 'react';
import PropTypes from 'prop-types';
import './PortData.scss';


function PortData({ link, image, title, category }){
  return (
      <a href={link}>
          <div className="port">
              <div className="portImg">
                  <img src={image} alt={title} />
              </div>
              <div className="portText">
                  <h2>{title}</h2>
                  <p>{category}</p>
              </div>
          </div>
      </a>
  )
}

PortData.propTypes = {
  id: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
} 

export default PortData;