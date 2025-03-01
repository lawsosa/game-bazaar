import SliderGame from "./SliderGame.jsx";
import {useState} from "react";
import NavSectionGame from "./NavSectionGame.jsx";

const giftSlides = [
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
    {
        id: 7,
        title: "BioShock",
        discountPrice: "500 ₽",
        originalPrice: "1600 ₽",
        rating: "★★★☆☆",
        img: "bioShock-background.webp",
    },
    {
        id: 8,
        title: "Dishonored",
        discountPrice: "620 ₽",
        originalPrice: "1220 ₽",
        rating: "★★★★★",
        img: "dishonored-background.webp",
    }
];

const keySlides = [
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
        title: "Mafia II",
        discountPrice: "1300 ₽",
        originalPrice: "3239 ₽",
        rating: "★★★★☆",
        img: "mafia-II-background.webp",
    },
    {
        id: 4,
        title: "Watch Dogs 2",
        discountPrice: "1200 ₽",
        originalPrice: "3500 ₽",
        rating: "★★★★★",
        img: "watch-dogs-2-background.webp",
    },
];

export default function GiftsGame() {
    const [tab, setTab] = useState('gift');

    return (
        <div className="slide">
            <NavSectionGame active={tab} onChange={(current) => setTab(current)}
                            showSwiperButtons={(tab === "gift" ? giftSlides : keySlides).length > 4}/>
            <SliderGame key={tab} slides={tab === 'gift' ? giftSlides : keySlides}/>
        </div>
    );
}