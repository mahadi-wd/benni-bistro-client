import { useEffect, useState } from "react";
import SectionTitle from "../../Components/sectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section>
      <SectionTitle
        subTitle={"---What Our Clients Say---"}
        title={"Testimonial"}
      ></SectionTitle>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper max-w-4xl mx-auto text-center"
      >
        {reviews.map((item) => (
          <SwiperSlide  key={item._id}>
            <Rating className="mx-auto" style={{ maxWidth: 180 }} value={item.rating} readOnly />

            <div className=" mx-auto mt-5">
                <FaQuoteLeft className="mx-auto text-7xl"></FaQuoteLeft>
            </div>

            <div className="py-10 px-20 text-center ">
              <p className="pb-5">{item.details}</p>
              <h1 className="text-yellow-500 text-xl font-bold">{item.name}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
