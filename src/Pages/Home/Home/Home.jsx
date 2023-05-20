import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Gallery from "../Gallery/Gallery";
import NewProducts from "../New Products/NewProducts";
import Theme from "../Theme/Theme";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <Theme></Theme>
            <NewProducts></NewProducts>
        </div>
    );
};

export default Home;