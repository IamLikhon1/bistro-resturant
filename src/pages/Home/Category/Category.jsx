import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTile from "../../../components/SectionTitle/SectionTile";


const Category = () => {
    return (
        <section>
            <SectionTile
            subHeading={'From 11.00am to 10pm'}
            heading={'Order Online'}
            >

            </SectionTile>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide><img src={slide1} alt="" />
        <h2 className="text-4xl text-center text-white font-serif font-medium -mt-16 shadow-xl">Salads</h2>
        </SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" />
        <h2 className="text-4xl text-center text-white font-serif font-medium -mt-16 shadow-xl">Pizza</h2>
        </SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" />
        <h2 className="text-4xl text-center text-white font-serif font-medium -mt-16 shadow-xl">Soup</h2>
        </SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" />
        <h2 className="text-4xl text-center text-white font-serif font-medium -mt-16 shadow-xl">Deserts</h2>
        </SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" />
        <h2 className="text-4xl text-center text-white font-serif font-medium -mt-16 shadow-xl">Salads</h2>
        </SwiperSlide>
        
      </Swiper>
        
        </section>
    );
};

export default Category;