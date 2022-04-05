
import { Link } from 'react-router-dom';
import useReview from '../../Hooks/useReview';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReview()
    return (
        <div>
            <div className='home-container '>
                <div className="home-text">
                    <div className="home-moto-text">
                        <h2 className='text-rose-600	'>Buy & enjoy</h2>
                        <h2 className='text-gray-800'>Your best Bike</h2>
                    </div>
                    <div className="home-moto-details">
                        <p className='font-serif'>Motozone is the leading brand in trials for apparel, parts and accessories. We are passionate about trials and our focus on all things trials is a clear choice we made on day one of the creation of the brand. We have and always will stay true to that vision.</p>
                    </div>
                </div>
                <div className="home-image">
                    <img src='motozone.jpg' alt="" />
                </div>
            </div>
            <div className="reviews-items">
                <div>
                    <h3 className='text-4xl font-semibold text-slate-600  underline'>Customer Review(3)</h3>
                </div>
                <div className="reviews w-full">
                    {

                        reviews.slice(0, 3).map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }

                </div>

            </div>
            <div className='see-all-review'>
                <Link className=' p-3 bg-gray-400 text-cyan-50 rounded	' to='/reviews'>See All Reviews</Link>
            </div>
        </div>
    );
};

export default Home;