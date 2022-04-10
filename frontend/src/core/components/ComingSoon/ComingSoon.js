import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import classes from './ComingSoon.module.css';
import MovieCard from '../Movies/MovieCard'

SwiperCore.use([Autoplay])

const ComingSoon = props => {
    const movies = props.movies

    return (
        <section className="coming" id="coming">
            <h2 className={classes.heading}>Coming Soon</h2>
            <Swiper
                spaceBetween={20} 
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,}
                }
                centeredSlides= {true}
                breakpoints= {{
                    0: {
                        width: 0,
                        slidesPerView: 2,
                    },
                    568: {
                        width: 568,
                        slidesPerView: 3,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 4,
                    },
                    968: {
                        width: 968,
                        slidesPerView: 5,
                    }
                }}
                className={classes.coming_container}
            >
                
                {movies.map(movie => 
                    <SwiperSlide>
                        <MovieCard movie={movie}/>
                    </SwiperSlide>
                )}
            </Swiper>
        </section>
    )
}

export default ComingSoon