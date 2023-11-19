import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import slide1 from "../../public/images/home/slide1.jpg";
import slide2 from "../../public/images/home/slide2.jpg";
import slide3 from "../../public/images/home/slide3.jpg";
import slide4 from "../../public/images/home/slide4.jpg";
import slide5 from "../../public/images/home/slide5.jpg";
import SectionTitle from "./SectionTitle";

const Category = () => {
  return (
    <div>
        <SectionTitle subHeading={"From 11.00am to 10.00pm"}
            heading={"Order online"}> </SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20 mt-10"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <p className="text-4xl uppercase text-white -mt-16 text-center">Salad</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <p className="text-4xl uppercase text-white -mt-16 text-center">Pizza</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <p className="text-4xl uppercase text-white -mt-16 text-center">soup</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <p className="text-4xl uppercase text-white -mt-16 text-center">Cake</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <p className="text-4xl uppercase text-white -mt-16 text-center">Salad</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
