import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import HomeCard from './HomeCard';


SwiperCore.use([Autoplay, Pagination])

const Home = (props) => {
    const movies = props.movies

    return (
        <section id="home">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}  
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,}
                }
                pagination={{ clickable: true }}
            >
                {movies.map(movie => 
                    <SwiperSlide>
                        <HomeCard movie={movie}/>
                    </SwiperSlide>
                )}
            </Swiper>
        </section>
    )
}

export default Home