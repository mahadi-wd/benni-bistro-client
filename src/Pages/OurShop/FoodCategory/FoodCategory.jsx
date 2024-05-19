import FoodCard from "../FoodCard/FoodCard";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const FoodCategory = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-4 max-w-screen-lg mx-auto mt-10">
            {items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)}
        </div>
    );
};

export default FoodCategory;