import Testimonial from "../testimonial/Testimonial";
import Banner from "./Banner/Banner";
import CategoryFood from "./Category/CategoryFood";
import MiniBanner from "./MiniBanner/MiniBanner";
import PopularMenu from "./PopularMenu/PopularMenu";
import Contact from "./contact/Contact";
import Featured from "./featured/Featured";
import ShefChoise from "./shefChoise/ShefChoise";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryFood></CategoryFood>
            <MiniBanner></MiniBanner>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <ShefChoise></ShefChoise>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;