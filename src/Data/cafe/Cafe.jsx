import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";

import "swiper/components/navigation/navigation.min.css"; // Navigation module
import "swiper/components/pagination/pagination.min.css"; // Pagination module
import { cafeData } from "./cafeData";
import "../data.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Cafe = () => {
  return (
    <>
      <div className="my-20 w-full" id="Cafe">
        <h1 className="text-center my-5 text-3xl font-bold bg-red-500 text-white p-5 ">
          Cafe
        </h1>
        <Swiper
          slidesPerView={window.innerWidth <= 768 ? 1 : 3}
          spaceBetween={10}
          navigation={true}
          pagination={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="mySwiper w-full my-10"
          loopFillGroupWithBlank={false}
        >
          {cafeData.map((data, index) => {
            return (
              <SwiperSlide
                className="mySwiperSlide p-3 items-center justify-between rounded-lg flex flex-col shadow-slate-300 shadow-lg"
                key={index}
              >
                <img src={data.src} alt="Cafe" className="w-full rounded-lg" />
                <p className="my-3">{data.description}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};
export default Cafe;
