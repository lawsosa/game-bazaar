import {useSwiper} from "swiper/react";
import Button from "./ui/Button.jsx";
import {MoveLeft, MoveRight} from "lucide-react";

export default function SwiperButtons() {
    const swiper = useSwiper();
    return (

        <div className="swiper-buttons">
            <Button className="swiper-button" onClick={() => swiper.slidePrev()}><MoveLeft/></Button>
            <Button className="swiper-button" onClick={() => swiper.slideNext()}><MoveRight/></Button>
        </div>
    )
}