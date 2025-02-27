import NavSectionDigital from "./NavSectionDigital.jsx";
import SliderDigital from "./SliderDigital.jsx";

const digitalSlides = [
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


export default function DigitalGoodsStore() {
    return (
        <>
            <div className="slide">
                <NavSectionDigital/>

                <SliderDigital slides={digitalSlides} />
            </div>
        </>
    )
}