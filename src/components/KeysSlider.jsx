import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import Button from "./ui/Button.jsx";
import {MoveLeft, MoveRight} from "lucide-react";
import {Navigation} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const SwiperButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="swiper-buttons">
            <Button className="swiper-button" onClick={() => swiper.slidePrev()}><MoveLeft/></Button>
            <Button className="swiper-button" onClick={() => swiper.slideNext()}><MoveRight/></Button>
        </div>
    );
};

const defaultSlides = [
    {
        id: 1,
        title: "DayZ",
        discountPrice: "150 ₽",
        originalPrice: "2553 ₽",
        rating: "★★★★★",
        img: "dayZ-background2.webp",
    },
    {
        id: 2,
        title: "Rust",
        discountPrice: "20 ₽",
        originalPrice: "1499 ₽",
        rating: "★★★★★",
        img: "rust-background.webp",
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
    {
        id: 5,
        title: "City Car Driving",
        discountPrice: "30 ₽",
        originalPrice: "362 ₽",
        rating: "★★★★★",
        img: "cityCarDriving-background.webp",
    },
    {
        id: 6,
        title: "Cyberpunk 2077",
        discountPrice: "1299 ₽",
        originalPrice: "2499 ₽",
        rating: "★★★☆☆",
        img: "cyberpunk2077-background.webp",
    },
];

export default function GiftsSlider({slides = defaultSlides}) {
    return (
        <>
            <main>
                <div className="slide">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={70}
                        slidesPerView={4}
                        pagination={{clickable: true}}
                        autoplay={{delay: 5000}}
                    >
                        {slides.map((slide) => (

                            <>
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
                            </>

                        ))}
                        <SwiperButtons/>
                    </Swiper>
                </div>
            </main>
        </>
    )
}