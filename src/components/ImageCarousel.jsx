import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ImageCarousel = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      className="w-full h-[600px]"
      
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <img
          src="/carousel1.jpeg"
          alt="slide 1"
          className="w-full sm:h-[600px] h-[500px] object-cover rounded-xl"
        />
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <img
            src="/carousel2.jpeg"
          alt="slide 2"
          className="w-full sm:h-[600px] h-[500px] object-cover rounded-xl"
        />
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <img
         src="/carousel1.jpeg"
          alt="slide 3"
          className="w-full sm:h-[600px] h-[500px] object-cover rounded-xl"
        />
      </SwiperSlide>

      {/* Slide 4 */}
      <SwiperSlide>
        <img
             src="/carousel2.jpeg"
          alt="slide 4"
          className="w-full sm:h-[600px] h-[500px] object-cover rounded-xl"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageCarousel;
