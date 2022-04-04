
import { Link } from 'react-router-dom';
import useReview from '../../Hooks/useReview';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
   const [reviews,setReviews] = useReview()
    return (
        <div>
            <div className='home-container '>
                <div className="home-text">
                    <div className="home-moto-text">
                        <h2 className='text-rose-600		'>Your next Bike</h2>
                        <h2>Your best Bike</h2>
                    </div>
                    <div className="home-moto-details">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi commodi unde nesciunt harum necessitatibus molestiae. Error exercitationem est similique eaque blanditiis dignissimos non. Earum aspernatur maiores ipsum. Numquam aspernatur sint illum, odio explicabo iure dolore atque totam tenetur quo tempora.</p>
                    </div>
                </div>
                <div className="home-image">
                    <img src='motozone.jpg' alt="" />
                </div>
            </div>
            <div className="reviews-items">
            
                {
                    
                    reviews.slice(0,3).map(review => <Review
                    key = {review.id}
                    review={review}
                    ></Review>)
                }
               
            </div>
            <Link className='p-3 bg-yellow-600	' to='/reviews'>See All Reviews</Link>
        </div>
    );
};

export default Home;