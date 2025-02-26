import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperButtons from "./SwiperButtons.jsx";

const defaultSlides = [
    {
        id: 1,
        title: "Dead by Daylight",
        discountPrice: "80 ₽",
        originalPrice: "199 ₽",
        rating: "★★★★★",
        img: "dbd-background.webp",
    },
    {
        id: 2,
        title: "GTAV",
        discountPrice: "20 ₽",
        originalPrice: "1499 ₽",
        rating: "★★★★★",
        img: "gtaV-background.webp",
    },
    {
        id: 3,
        title: "Red Dead Redemption 2",
        discountPrice: "1499 ₽",
        originalPrice: "3499 ₽",
        rating: "★★★★☆",
        img: "rdr2-background.webp",
    },
    {
        id: 4,
        title: "Euro Truck Simulator 2",
        discountPrice: "1 ₽",
        originalPrice: "686 ₽",
        rating: "★★★★★",
        img: "ets2-background.webp",
    },
];

export default function GiftsSlider({ slides = defaultSlides }) {
    // Проверяем количество слайдов
    const shouldShowButtons = slides.length > 4; // Показываем кнопки, только если слайдов больше 4

    return (
        <>
            <main>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={70}
                    slidesPerView={4}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
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
                    {shouldShowButtons && <SwiperButtons/>}
                </Swiper>
            </main>
        </>
    );
}