import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container '>
            <div className="home-text">
                <h2>Your next Bike</h2>
                <h2>Your best Bike</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi commodi unde nesciunt harum necessitatibus molestiae. Error exercitationem est similique eaque blanditiis dignissimos non. Earum aspernatur maiores ipsum. Numquam aspernatur sint illum, odio explicabo iure dolore atque totam tenetur quo tempora.</p>
            </div>
            <div className="home-image">
                <img src='motozone.jpg' alt="" />
            </div>
        </div>
    );
};

export default Home;