import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './CustomLink.css'

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div className='custom'>
        <Link 
          style={{ color: match ? 'red': 'black' }}
          to={to}
          {...props}
        >
          {children}
        </Link>
        {match && " "}
      </div>
    );
  }

export default CustomLink;