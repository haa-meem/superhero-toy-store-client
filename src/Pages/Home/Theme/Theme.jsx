import logo1 from '../../../assets/Marvel_Logo_200x.jpg'
import logo2 from '../../../assets/DC_logo_200x.jpg'
import logo3 from '../../../assets/Avengers_Icon_3c7872f5-f775-470b-ae0a-33050e9afe00_200x.jpg'
import logo4 from '../../../assets/Spidey-logo_200x.jpg'
import logo5 from '../../../assets/anime_3c47228b-c523-4d65-847b-634e0057a4eb_200x.jpg'
import logo6 from '../../../assets/Untitled_design_4_741b08d7-e668-4ebe-b211-c7ca05247f69_200x.jpg'
import logo7 from '../../../assets/star-wars-vector.jpg'

const Theme = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-5xl mb-3'>Shop by Theme</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 bg-amber-200">
                <img className="w-full h-full p-3" src={logo1} />
                <img className="w-full h-full p-3" src={logo2} />
                <img className="w-full h-full p-3" src={logo3} />
                <img className="w-full h-full p-3" src={logo4} />
                <img className="w-full h-full p-3" src={logo5} />
                <img className="w-full h-full p-3" src={logo6} />
                <img className="w-full h-full p-3" src={logo7} />
            </div>
        </div>
    );
};

export default Theme;