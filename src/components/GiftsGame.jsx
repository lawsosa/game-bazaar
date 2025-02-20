import {SwiperSlide, Swiper, useSwiper} from "swiper/react";
import {Navigation,} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Компонент для управления Swiper через кнопки
const SwiperButtons = () => {
    const swiper = useSwiper();
    console.log("Swiper instance:", swiper); // Для отладки

    return (
        <div className="swiper-buttons">
            <button onClick={() => swiper.slidePrev()}>Предыдущий</button>
            <button onClick={() => swiper.slideNext()}>Следующий</button>
        </div>
    );
};

// Дефолтные слайды
const defaultSlides = [
    {
        id: 1,
        title: "DayZ",
        discountPrice: "1500 ₽",
        originalPrice: "2553 ₽",
        rating: "★★★★★",
        img: "dayZ-background.webp"
    },
    {
        id: 2,
        title: "Rust",
        discountPrice: "20 ₽",
        originalPrice: "1499 ₽",
        rating: "★★★★★",
        img: "rust-background.webp"
    },
    {
        id: 3,
        title: "Red Dead Redemption 2",
        discountPrice: "1499 ₽",
        originalPrice: "3499 ₽",
        rating: "★★★★☆",
        img: "rdr-background.webp"
    },
    {
        id: 4,
        title: "Euro Truck Simulator 2",
        discountPrice: "1 ₽",
        originalPrice: "686 ₽",
        rating: "★★★★★",
        img: "ets-background.webp"
    },
    {
        id: 5,
        title: "City Car Driving",
        discountPrice: "30 ₽",
        originalPrice: "362 ₽",
        rating: "★★★★★",
        img: ""
    },
    {
        id: 6,
        title: "Cyberpunk 2077",
        discountPrice: "1299 ₽",
        originalPrice: "2499 ₽",
        rating: "★★★☆☆"
        // imgUrl: ""
    }
];

export default function GiftsGame(slides = defaultSlides) {
    // Функция для разделения массива на группы по заданному размеру
    const chunk = (array, size) => {
        const chunked = [];
        for (let i = 0; i < array.length; i += size) {
            chunked.push(array.slice(i, i + size));
        }
        return chunked;
    };

    // Разделяем массив slides на группы по 2 элемента
    const groupedSlides = chunk(slides, 3);

    return (
        <>
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{clickable: true}}
                autoplay={{delay: 5000}}
            >
                {Array.isArray(slides) && slides.length > 0 ? (
                    groupedSlides.map((group, index) => (
                        <SwiperSlide key={index}>
                            <div className="slide__game-content">
                                {group.map((slide) => (
                                    <div key={slide.id} className="slide__game-content__item">
                                        <img className="slide__game-content__item__img" src={`/img/${slide.img}`}
                                             alt=""/>
                                        <h3 className="slide__game-content__item__title">{slide.title}</h3>
                                        <div className="slide__game-content__item__price-block">
                                            <span className="slide__game-content__item__price-block__value--discount">
                                                {slide.discountPrice}</span>
                                            <span className="slide__game-content__item__price-block__value--original">
                                                {slide.originalPrice}</span>
                                        </div>
                                        <div className="slide__game-content__item--rating">{slide.rating}</div>
                                    </div>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))
                ) : (
                    <div>Слайдов нет</div>
                )}
                <SwiperButtons/>
            </Swiper>
        </>
    );
}