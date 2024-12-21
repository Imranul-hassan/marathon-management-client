
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'

import bgimg1 from '../assets/marathon-1.webp'
import bgimg2 from '../assets/marathon-2.webp'
import bgimg3 from '../assets/marathon-1.webp'

export default function Carousel() {
    return (
        <div className='pt-5 pb-10 mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <Slide
                        image={bgimg1}
                        text='Empowering Marathons, One Step at a Time'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bgimg2}
                        text='Turning Marathon Dreams into Reality'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bgimg3}
                        text='Where Every Mile Matters'
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
