import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide_1 from "../../../assets/home/slide1.jpg";
import slide_2 from "../../../assets/home/slide2.jpg";
import slide_3 from "../../../assets/home/slide3.jpg";
import slide_4 from "../../../assets/home/slide4.jpg";
import slide_5 from "../../../assets/home/slide5.jpg";

const CategoryFood = () => {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-10"
      >
        <SwiperSlide>
          <img src={slide_1} alt="" />
          <p className="uppercase -mt-12 text-white text-xl font-bold text-center">Salad</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_2} alt="" />
          <p className="uppercase -mt-12 text-white text-xl font-bold text-center">Pizzas</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_3} alt="" />
          <p className="uppercase -mt-12 text-white text-xl font-bold text-center">soups</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_4} alt="" />
          <p className="uppercase -mt-12 text-white text-xl font-bold text-center">desserts</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_5} alt="" />
          <p className="uppercase -mt-12 text-white text-xl font-bold text-center">Salad</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CategoryFood;
