import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="d-sm-flex justify-content-center justify-content-sm-between">
        <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
          Copyright © 2025. 
          <a  target="_blank" rel="noopener noreferrer">
            RTO website 
          </a>{' '}
           All rights reserved.
        </span>
        <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
          Hand-crafted & made with <i className="ti-heart text-danger ml-1"></i>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
