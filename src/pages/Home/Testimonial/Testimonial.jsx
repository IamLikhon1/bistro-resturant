import SectionTile from "../../../components/SectionTitle/SectionTile";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [reviews, setReviews]=useState([])
    useEffect(()=>{
        fetch('review.json')
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
        })
    },[])
    return (
        <section className="my-20">
            <SectionTile
            subHeading='What Our Client Say'
            heading='Testimonials'
            ></SectionTile>
             <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
            reviews.map(review=><SwiperSlide
            key={review._id} >
                            <div className=" flex flex-col items-center mx-24 my-16">
                            <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                            />
                                <p className="py-12">{review.details}</p>
                    <h3 className="text-3xl text-orange-400 font-serif">{review.name}</h3>
                </div>
            </SwiperSlide>)
        }
      </Swiper>
            
        </section>
    );
};

export default Testimonial;