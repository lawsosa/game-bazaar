import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SliderDigital({ slides }) {
    return (
        <>
            <Swiper
                modules={[Navigation]}
                spaceBetween={70}
                slidesPerView={4}
                slidesPerGroup={4}
                pagination={{clickable: true}}
                autoplay={{delay: 5000}}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="slide__game-swiper__item">
                            <img
                                className="slide__game-swiper__item__img"
                                src={`/img/${slide.img}`}
                                alt=""
                            />
                            <h3 className="slide__game-swiper__item__title">{slide.title}</h3>
                            <div className="slide__game-swiper__item__price-block">
                  <span className="slide__game-swiper__item__price-block__value--discount">
                    {slide.discountPrice}
                  </span>
                                <span className="slide__game-swiper__item__price-block__value--original">
                    {slide.originalPrice}
                  </span>
                            </div>
                            <div className="slide__game-swiper__item--rating">{slide.rating}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}