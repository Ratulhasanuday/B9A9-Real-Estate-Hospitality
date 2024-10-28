import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
const Banner = () => {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className='text-center'>
                    <img src='/src/assets/logo m.png' alt="" />
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img src='/src/assets/logo m.png' alt="" />
                </SwiperSlide>
                 <SwiperSlide className='text-center'>
                    <img src='/src/assets/logo m.png' alt="" />
                </SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>

        </>
    );
};

export default Banner;