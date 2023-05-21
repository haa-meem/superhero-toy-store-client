import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Gallery from "../Gallery/Gallery";
import NewProducts from "../New Products/NewProducts";
import Theme from "../Theme/Theme";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    //Website name changing in every route
    useEffect(() => {
        document.title = 'SuperHero Toy Store | Home'
    }, []);
    //AOS
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div>
            <h1 data-aos="fade-up" className="font-bold text-5xl text-center text-orange-300 mb-3">Welcome to My Website</h1>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <Theme></Theme>
            <NewProducts></NewProducts>
        </div>
    );
};

export default Home;