import Banner from "./Banner/Banner";
import CategoryFood from "./Category/CategoryFood";
import MiniBanner from "./MiniBanner/MiniBanner";
import PopularMenu from "./PopularMenu/PopularMenu";
import Contact from "./contact/Contact";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryFood></CategoryFood>
            <MiniBanner></MiniBanner>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
        </div>
    );
};

export default Home;