import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import CustomLink from '../CustomLink/CustomLink'

const Header = () => {
    return (
        <nav className='header-nav'>
            <Link to='/home'>HOME</Link>
            <Link to='/reviews'>REVIEWS</Link>
            <Link to='/dashboard'>DASHBOARD</Link>
            <Link to='/blogs'>BLOGS</Link>
            <Link to='/about'>ABOUT</Link>
            {/* <CustomLink to='/home'>HOME</CustomLink>
            <CustomLink to='/reviews'>REVIEWS</CustomLink>
            <CustomLink to='/dashboard'>DASHBOARD</CustomLink>
            <CustomLink to='/blogs'>BLOGS</CustomLink>
            <CustomLink to='/about'>ABOUT</CustomLink> */}
        </nav>
    );
};

export default Header;