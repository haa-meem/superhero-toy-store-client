import { Link } from 'react-router-dom';
import pic from '../assets/not_found_404.jpg'

const NotFound = () => {
    return (
        <div className='text-center bg-black'>
            <img className='lg:w-10/12 mx-auto' src={pic} alt="" />
            <p className='text-red-500 font-bold text-xl my-2'>You are in a wrong page.</p>
            <Link to="/"><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-green-500 glass">Back to Home</button></Link>
        </div>
    );
};

export default NotFound;