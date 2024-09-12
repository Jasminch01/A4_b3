import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/swiper-bundle.css";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="bg-black p-20">
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          765: {
            slidesPerView: 1,
          },
          1000: {
            slidesPerView: 1,
          },
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
      >
        <SwiperSlide>
          <div>
            <div className="">
              <div className="flex justify">
                <div className="flex-[0.7] space-y-5 text-white">
                  <h1 className="text-4xl font-bold">Up to</h1>
                  <p className="text-7xl font-bold">
                    50% <span className="text-3xl">off</span>
                  </p>
                  <p className="text-3xl">on your favourite gear</p>
                  <button className="py-2 font-semibold bg-white text-black px-3">
                    Buy Now
                  </button>
                </div>
                <div className="flex-[0.3]">
                  <img src="/s1.jpg" className="rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <div className="flex justify">
              <div className="flex-[0.7] space-y-5 text-white">
                <h1 className="text-4xl font-bold">Up to</h1>
                <p className="text-7xl font-bold">
                  50% <span className="text-3xl">off</span>
                </p>
                <p className="text-3xl">on your favourite gear</p>
                <button className="py-2 font-semibold bg-white text-black px-3">
                  Buy Now
                </button>
              </div>
              <div className="flex-[0.3]">
                <img src="/list2.jpg" className="rounded-lg" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
